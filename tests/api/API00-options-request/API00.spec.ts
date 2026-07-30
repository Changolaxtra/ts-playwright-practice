import { test, expect } from '@playwright/test';

test.describe('API00: OPTIONS request to an endpoint', () => {
  test('returns endpoint metadata instead of a 405', async ({ request }) => {
    const response = await request.fetch('productsList', { method: 'OPTIONS' });

    expect(response.status()).toBe(200);

    const allowHeader = response.headers()['allow'];
    expect(allowHeader).toBeDefined();
    expect(allowHeader).toContain('GET');

    const body = await response.json();
    expect(body).toHaveProperty('name');
  });
});
