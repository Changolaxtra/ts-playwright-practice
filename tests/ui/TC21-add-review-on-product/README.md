# TC21: Add review on product

**Source:** [automationexercise.com/test_cases](https://automationexercise.com/test_cases)
**Status:** Not implemented

## Objective

Product review submission and confirmation.

## Preconditions

- Base URL: `https://automationexercise.com`
- No prior session/cookies (start from a clean browser context)

## Test Steps

1. Launch browser
2. Navigate to url 'https://automationexercise.com'
3. Click on 'Products' button
4. Verify user is navigated to ALL PRODUCTS page successfully
5. Click on 'View Product' button
6. Verify 'Write Your Review' is visible
7. Enter name, email and review
8. Click 'Submit' button
9. Verify success message "Thank you for your review."

## Notes

- Spec file for this test case should live alongside this README (e.g. `TC21.spec.ts`).
- Prefer role/text-based locators per the conventions in the repo's `CLAUDE.md`.
