# TC23: Verify address details in checkout page

**Source:** [automationexercise.com/test_cases](https://automationexercise.com/test_cases)
**Status:** Not implemented

## Objective

Address validation during checkout.

## Preconditions

- Base URL: `https://automationexercise.com`
- No prior session/cookies (start from a clean browser context)

## Test Steps

1. Launch browser
2. Navigate to url 'https://automationexercise.com'
3. Verify that home page is visible successfully
4. Click 'Signup / Login' button
5. Fill all details in Signup and create account
6. Verify 'ACCOUNT CREATED!' and click 'Continue' button
7. Verify 'Logged in as username' at top
8. Add products to cart
9. Click 'Cart' button
10. Verify that cart page is displayed
11. Click 'Proceed To Checkout'
12. Verify that the delivery address is same address filled at the time of registration of account
13. Verify that the billing address is same address filled at the time of registration of account
14. Click 'Delete Account' button
15. Verify 'ACCOUNT DELETED!' and click 'Continue' button

## Notes

- Spec file for this test case should live alongside this README (e.g. `TC23.spec.ts`).
- Prefer role/text-based locators per the conventions in the repo's `CLAUDE.md`.
