import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

// Headed + slowed down locally by default so runs are easy to watch; headless in CI.
// Override locally with `HEADLESS=true` for fast, invisible runs (e.g. the full suite).
const isCI = !!process.env.CI;
const headless = process.env.HEADLESS ? process.env.HEADLESS === 'true' : isCI;

const baseURL = process.env.BASE_URL ?? 'https://automationexercise.com';
// Trailing slash matters: relative request paths resolve via `new URL(path, baseURL)`,
// which drops the last segment of baseURL if it doesn't end in '/' (e.g. 'api' -> dropped).
const apiBaseURL = process.env.API_BASE_URL ?? 'https://automationexercise.com/api/';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  ...(process.env.CI ? { workers: 2 } : {}),
  reporter: [
    ['html', { open: 'never' }],
    ['list'],
    ...(process.env.CI ? [['github'] as const] : []),
  ],
  timeout: 30_000,
  expect: {
    timeout: 5_000,
  },
  use: {
    baseURL,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    launchOptions: { headless, ...(headless ? {} : { slowMo: 500 }) },
  },
  projects: [
    {
      name: 'api',
      testDir: './tests/api',
      use: {
        baseURL: apiBaseURL,
      },
    },
    {
      name: 'chromium',
      testDir: './tests/ui',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      testDir: './tests/ui',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      testDir: './tests/ui',
      use: { ...devices['Desktop Safari'] },
    },
  ],
});
