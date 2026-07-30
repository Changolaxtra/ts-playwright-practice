# TC10: Verify Subscription in home page

**Source:** [automationexercise.com/test_cases](https://automationexercise.com/test_cases)
**Status:** Not implemented

## Objective

Email subscription on the homepage.

## Preconditions

- Base URL: `https://automationexercise.com`
- No prior session/cookies (start from a clean browser context)

## Test Steps

1. Launch browser
2. Navigate to url 'https://automationexercise.com'
3. Verify that home page is visible successfully
4. Scroll down to footer
5. Verify text 'SUBSCRIPTION'
6. Enter email address in input and click arrow button
7. Verify success message 'You have been successfully subscribed!' is visible

## Notes

- Spec file for this test case should live alongside this README (e.g. `TC10.spec.ts`).
- Prefer role/text-based locators per the conventions in the repo's `CLAUDE.md`.
