# TC13: Verify Product quantity in Cart

**Source:** [automationexercise.com/test_cases](https://automationexercise.com/test_cases)
**Status:** Not implemented

## Objective

Adjusting product quantity and cart verification.

## Preconditions

- Base URL: `https://automationexercise.com`
- No prior session/cookies (start from a clean browser context)

## Test Steps

1. Launch browser
2. Navigate to url 'https://automationexercise.com'
3. Verify that home page is visible successfully
4. Click 'View Product' for any product on home page
5. Verify product detail is opened
6. Increase quantity to 4
7. Click 'Add to cart' button
8. Click 'View Cart' button
9. Verify that product is displayed in cart page with exact quantity

## Notes

- Spec file for this test case should live alongside this README (e.g. `TC13.spec.ts`).
- Prefer role/text-based locators per the conventions in the repo's `CLAUDE.md`.
