# ts-playwright-practice

TypeScript + Playwright practice project for testing [automationexercise.com](https://automationexercise.com):
its website (UI) and its [REST API](https://automationexercise.com/api_list).

This is a personal learning project. Test cases are organized one-per-folder under `tests/ui/`
and `tests/api/`, each documented with a `README.md` describing its steps and expected result.
The actual `*.spec.ts` implementations are written by hand as practice — see
[Working on a test case](#working-on-a-test-case) below.

## Setup

```bash
nvm use
npm install
npx playwright install --with-deps
cp .env.example .env
```

`.env` controls the target environment (`BASE_URL`, `API_BASE_URL`) — defaults to
`https://automationexercise.com` and its `/api/`.

### Headed vs. headless

Local runs are **headed with a 500ms slowMo by default** (see `playwright.config.ts`), so you can
watch the browser work. CI runs headless automatically. To run fast/invisible locally too:

```bash
HEADLESS=true npm test        # or: npm run test:fast
```

## Running tests

### Entire suite

```bash
npm test                    # everything: UI (Chromium, Firefox, WebKit) + API — headed locally
npm run test:fast           # everything, headless (no slowMo) — quicker for a full run
npm run report              # open the HTML report from the last run
```

### Only UI or only API

```bash
npm run test:ui             # UI tests only, across all three browser projects
npm run test:api            # API tests only

npx playwright test --project=chromium   # UI tests, Chromium only
npx playwright test --project=firefox    # UI tests, Firefox only
npx playwright test --project=webkit     # UI tests, WebKit only
npx playwright test --project=api        # same as npm run test:api
```

### A specific test case

Each test case's spec lives inside its own folder, so you can target it directly by path:

```bash
# a single UI test case, in Chromium only
npx playwright test tests/ui/TC01-register-user --project=chromium

# a single API test case
npx playwright test tests/api/API01-get-all-products-list --project=api

# by test/describe title instead of path
npx playwright test --grep "Register User"

# debug a single test case step by step
npx playwright test tests/ui/TC01-register-user --debug
```

### Everyday dev commands

```bash
npm run lint          # ESLint
npm run lint:fix       # ESLint with autofix
npm run format         # Prettier — write
npm run format:check   # Prettier — check only
npm run typecheck      # tsc --noEmit
npm run codegen        # Playwright codegen, to help find locators
```

## Scripts reference

| Command                           | Description                                                        |
| --------------------------------- | ------------------------------------------------------------------ |
| `npm test`                        | Run all tests (UI + API projects)                                  |
| `npm run test:ui`                 | Run UI tests across Chromium, Firefox, WebKit                      |
| `npm run test:api`                | Run API tests only                                                 |
| `npm run test:headed`             | Run UI tests headed (redundant locally — see below — but explicit) |
| `npm run test:fast`               | Run tests headless, no slowMo (fast/CI-like locally)               |
| `npm run test:debug`              | Run tests in Playwright Inspector                                  |
| `npm run report`                  | Open the last HTML report                                          |
| `npm run codegen`                 | Launch Playwright codegen                                          |
| `npm run lint` / `lint:fix`       | Lint (and fix) with ESLint                                         |
| `npm run format` / `format:check` | Format (or check) with Prettier                                    |
| `npm run typecheck`               | Type-check with `tsc --noEmit`                                     |

## Structure

```
tests/
  ui/            One folder per UI test case (TC00 … TC26), each with a README.md
                  documenting the steps. TC01-TC26 come from automationexercise.com/test_cases;
                  TC00 is a custom smoke test not on the site's list.
  api/           One folder per API test case (API00 … API14), each with a README.md
                  documenting the endpoint/params/expected response. API01-API14 come from
                  automationexercise.com/api_list; API00 is a custom exploratory case.
  api/clients/   Typed API clients (add as you implement each API test case)
  pages/         Page Object Model classes (add as you implement each UI test case)
  fixtures/      Custom Playwright fixtures (extend as page objects/clients are added)
  utils/         Shared test helpers
```

## Working on a test case

Each `tests/ui/TCxx-*/` and `tests/api/APIxx-*/` folder starts out with only a `README.md`
describing that case's steps and expected result. To implement one:

1. Read its `README.md`.
2. Add/extend the page object (UI) or API client (API) it needs.
3. Write the spec alongside the README, e.g. `tests/ui/TC01-register-user/TC01.spec.ts`.
4. Run it (see [A specific test case](#a-specific-test-case) above).
5. Flip the README's `**Status:**` line to `Implemented` once it passes.

See `CLAUDE.md` for coding conventions and best practices used in this project (including that
Claude should not write these test implementations — they're for practice).
