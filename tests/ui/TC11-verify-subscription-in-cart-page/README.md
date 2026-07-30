# TC11: Verify Subscription in Cart page

**Source:** [automationexercise.com/test_cases](https://automationexercise.com/test_cases)
**Status:** Not implemented

## Objective

Email subscription from the cart page.

## Preconditions

- Base URL: `https://automationexercise.com`
- No prior session/cookies (start from a clean browser context)

## Test Steps

1. Launch browser
2. Navigate to url 'https://automationexercise.com'
3. Verify that home page is visible successfully
4. Click 'Cart' button
5. Scroll down to footer
6. Verify text 'SUBSCRIPTION'
7. Enter email address in input and click arrow button
8. Verify success message 'You have been successfully subscribed!' is visible

## Notes

- Spec file for this test case should live alongside this README (e.g. `TC11.spec.ts`).
- Prefer role/text-based locators per the conventions in the repo's `CLAUDE.md`.
