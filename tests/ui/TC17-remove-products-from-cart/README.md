# TC17: Remove Products From Cart

**Source:** [automationexercise.com/test_cases](https://automationexercise.com/test_cases)
**Status:** Not implemented

## Objective

Removing products from the shopping cart.

## Preconditions

- Base URL: `https://automationexercise.com`
- No prior session/cookies (start from a clean browser context)

## Test Steps

1. Launch browser
2. Navigate to url 'https://automationexercise.com'
3. Verify that home page is visible successfully
4. Add products to cart
5. Click 'Cart' button
6. Verify that cart page is displayed
7. Click 'X' button corresponding to particular product
8. Verify that product is removed from the cart

## Notes

- Spec file for this test case should live alongside this README (e.g. `TC17.spec.ts`).
- Prefer role/text-based locators per the conventions in the repo's `CLAUDE.md`.
