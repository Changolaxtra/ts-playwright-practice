# TC00: Visit Home Page

**Source:** Custom test case (not part of automationexercise.com's published [test_cases](https://automationexercise.com/test_cases) list) — a basic smoke check to sanity-test the setup before working through TC01–TC26.
**Status:** Implemented (smoke test)

## Objective

Verify the home page loads successfully and its key elements render, as a minimal smoke test.

## Preconditions

- Base URL: `https://automationexercise.com`
- No prior session/cookies (start from a clean browser context)

## Test Steps

1. Launch browser
2. Navigate to url 'https://automationexercise.com'
3. Verify that home page is visible successfully (HTTP response OK, no error page)
4. Verify the page title contains 'Automation Exercise'
5. Verify the header logo is visible
6. Verify the main navigation menu is visible (Home, Products, Cart, Signup / Login, ...)
7. Verify the features/carousel section on the home page is visible

## Notes

- Spec file for this test case should live alongside this README (e.g. `TC00.spec.ts`).
- Prefer role/text-based locators per the conventions in the repo's `CLAUDE.md`.
- Good candidate for a `@smoke` tag once tagging conventions are set up.
