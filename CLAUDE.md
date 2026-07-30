# CLAUDE.md

Guidance for Claude Code (and anyone else) working in this repository: a TypeScript + Playwright
project testing [automationexercise.com](https://automationexercise.com) (UI) and its
[REST API](https://automationexercise.com/api_list), running on Node.js 20.

## This is a learning project — do not write test code

This repo exists for the owner to practice TypeScript + Playwright. **Claude must not write the
`.spec.ts` implementations, page objects, or API clients** — only scaffolding, structure,
config, and documentation (e.g. the per-test-case `README.md` files). If asked to "implement" a
test case, confirm whether that means docs/structure (in scope) or actual test code (out of
scope, unless the user explicitly says otherwise for that request).

## Project structure

```
tests/
  ui/            One folder per UI test case: TC00-visit-home-page/, TC01-register-user/ … TC26-.../
                    README.md   steps for that test case (TC01-26 from automationexercise.com/test_cases;
                                 TC00 is a custom smoke test not on the site's list)
                    TCxx.spec.ts   the implementation (added as each case is practiced)
  api/           One folder per API test case: API00-options-request/, API01-get-all-products-list/ … API14-.../
                    README.md   endpoint/params/expected response (API01-14 from automationexercise.com/api_list;
                                 API00 is a custom exploratory case for an undocumented method)
                    APIxx.spec.ts  the implementation
  api/clients/   Typed API client classes wrapping APIRequestContext
  pages/         Page Object Model classes
  fixtures/      Custom Playwright fixtures (test.extend)
  utils/         Shared test helpers (env, data builders, etc.)
playwright.config.ts
tsconfig.json
```

- UI and API tests are separate Playwright **projects** (`chromium`/`firefox`/`webkit` vs `api`)
  so they can be run and filtered independently and use different `baseURL`s.
- Never add product/business logic here — this repo only contains tests, fixtures, and the
  minimal helpers needed to support them.

## Test case catalog (`tests/ui/TCxx-*`, `tests/api/APIxx-*`)

- Every test case folder's `README.md` is the source of truth for that case's steps/expected
  result — copied from the site's own test case pages, not invented. If a step is ambiguous,
  re-check the README rather than guessing; don't silently change scope when implementing.
- Naming: `TC` + 2-digit number for UI (`TC00`…`TC26`), `API` + 2-digit number for API
  (`API00`…`API14`) matching the numbering on automationexercise.com. `TC00` and `API00` are
  custom cases not on the site's own numbered lists — see their READMEs' `**Source:**` line.
  Keep the kebab-case slug suffix in sync with the README title if either is renamed.
- Implement the spec **inside** its own test case folder (e.g.
  `tests/ui/TC01-register-user/TC01.spec.ts`), not in a flat `tests/ui/*.spec.ts` — this keeps the
  README and its implementation next to each other.
- As page objects / API clients are built out, wire them into `tests/fixtures/pages.fixture.ts` /
  `tests/fixtures/api.fixture.ts` (currently empty scaffolds — see comments in those files) rather
  than instantiating them ad hoc per spec.
- Several UI test cases (TC01, TC14–16, TC23, TC24) create an account and must delete it at the
  end (`Delete Account` step) — treat that as required cleanup, not optional, so re-running the
  suite doesn't collide on a duplicate email (see TC05: registering an already-used email is
  itself a distinct test case). Generate a unique email per run (e.g. timestamp/uuid suffix).
- **API quirk**: automationexercise's API always responds with HTTP 200 at the transport level —
  the real result lives in the JSON body's `responseCode` / `message` fields (e.g. 405 for a
  wrong method, 400 for a missing param, 404 for "not found"). Assert on the body field, not
  `response.status()` / `response.ok()`. This is called out in each `APIxx` README's Notes section.
- API11 (create account) / API12 (delete account) / API13 (update account) / API14 (get by email)
  are naturally chained — tests for API12–14 should create their own account first (via API11) and
  clean up via API12, rather than depending on a fixed seeded account.

## TypeScript best practices

- **Strict mode is on** (`strict`, `noUncheckedIndexedAccess`, `exactOptionalPropertyTypes`) —
  don't weaken `tsconfig.json` to make an error go away; fix the type instead.
- Prefer `type` aliases for data shapes (API payloads, fixtures); use `interface` only when you
  need declaration merging or a class implements it.
- Avoid `any`. If a third-party response is genuinely unknown, type it `unknown` and narrow it.
- No non-null assertions (`!`) to silence the compiler — handle the `undefined`/`null` case or use
  a proper type guard.
- Run `npm run typecheck` before considering a change done; CI treats type errors as failures.
- Keep test files as `.ts`, never `.js` — type safety is the point of this repo.

## Playwright best practices

### Locators and assertions

- Prefer role/accessibility-based locators (`getByRole`, `getByLabel`, `getByText`) over CSS or
  XPath. They're resilient to markup changes and double as an accessibility check.
- Use `data-testid` only when no accessible locator is reasonable, and keep the attribute name
  consistent (`data-testid`, not a mix of `data-test`, `data-qa`, etc.).
- Never use manual `waitForTimeout`. Rely on Playwright's auto-waiting and web-first assertions
  (`await expect(locator).toBeVisible()`, etc.) — they retry until the timeout instead of
  sleeping blindly.
- Assert on the smallest thing needed to verify behavior (a specific locator/attribute), not on
  full-page HTML or screenshots, unless doing an explicit visual regression test.

### Structure

- One `test.describe` per page/feature/endpoint group. Keep test titles behavior-focused
  ("shows a validation error when email is invalid"), not implementation-focused.
- Use the **Page Object Model** for UI: page objects hold locators and user actions; specs hold
  assertions and scenario flow. Don't put `expect` calls inside page objects.
- Use a typed **API client** per resource for API tests (see `tests/api/clients/`); specs call the
  client and assert on status/shape, they don't build raw fetch calls inline.
- Compose both via **fixtures** (`tests/fixtures/*.fixture.ts`) using `test.extend`, instead of
  instantiating page objects/clients by hand in every test.
- Keep tests independent and order-independent: each test creates and cleans up its own data
  (see the account create/delete pattern called out above for TC01/TC14–16/TC23/TC24 and
  API11–13). Don't depend on execution order.

### Config and environments

- All environment-specific values (`BASE_URL`, `API_BASE_URL`, tokens) come from `.env` /
  `process.env`, never hardcoded in specs. Copy `.env.example` to `.env` locally.
- Use `test.step()` to break a long test into named steps for clearer trace/report output.
- Prefer `expect.soft()` only when you deliberately want to collect multiple failures in one test;
  default to normal `expect` so failures fail fast.
- Tag slow/flaky-prone or environment-specific tests (`@smoke`, `@slow`) via test titles or
  annotations rather than skipping silently.

### Debugging and CI

- Local debugging: `npm run test:debug` (Inspector) or `npm run codegen` to record locators.
- Traces/screenshots/video are captured only `on-first-retry` / `only-on-failure` /
  `retain-on-failure` — check `playwright-report/` after a failing run instead of adding manual
  `console.log`/screenshots.
- `retries` and `workers` are conditioned on `process.env.CI` in `playwright.config.ts` — don't
  hardcode retry loops in tests to compensate for flakiness; fix the root cause (usually a missing
  wait condition or shared state).

## Tooling

- `npm run lint` / `npm run lint:fix` — ESLint (flat config), includes `eslint-plugin-playwright`
  rules (e.g. no conditional `if` in tests, no focused/skipped tests left behind).
- `npm run format` / `npm run format:check` — Prettier is the source of truth for formatting;
  don't hand-format or fight it.
- Run lint + typecheck + tests before treating a task as complete.

## Project skills

- `/check <TCxx|APIxx>` — reviews an already-written test case implementation against its
  README and this file's conventions; gives feedback only, never edits the spec (see
  `.claude/skills/check/SKILL.md`).
- `/hint <TCxx|APIxx>` — light orientation for starting a not-yet-implemented test case (what page
  object/API client it probably needs, one gotcha if relevant); no code, no step-by-step solution
  (see `.claude/skills/hint/SKILL.md`).

## When implementing a test case

1. Read the case's `README.md` in full first (`tests/ui/TCxx-*/` or `tests/api/APIxx-*/`) — steps,
   preconditions, and expected result are already documented there.
2. UI: add/extend the page object(s) it needs in `tests/pages/`, expose them via
   `tests/fixtures/pages.fixture.ts`, then write `TCxx.spec.ts` in that same test case folder.
3. API: add/extend the client it needs in `tests/api/clients/`, expose it via
   `tests/fixtures/api.fixture.ts`, then write `APIxx.spec.ts` in that same test case folder.
4. Update `.env.example` if a new environment variable is introduced.
5. Update the README's `**Status:**` line from `Not implemented` to `Implemented` once the spec
   passes.
