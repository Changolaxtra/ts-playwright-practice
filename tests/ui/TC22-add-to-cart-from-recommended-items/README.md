# TC22: Add to cart from Recommended items

**Source:** [automationexercise.com/test_cases](https://automationexercise.com/test_cases)
**Status:** Not implemented

## Objective

Adding recommended products to cart.

## Preconditions

- Base URL: `https://automationexercise.com`
- No prior session/cookies (start from a clean browser context)

## Test Steps

1. Launch browser
2. Navigate to url 'https://automationexercise.com'
3. Scroll to bottom of page
4. Verify 'RECOMMENDED ITEMS' are visible
5. Click on 'Add To Cart' on Recommended product
6. Click on 'View Cart' button
7. Verify that product is displayed in cart page

## Notes

- Spec file for this test case should live alongside this README (e.g. `TC22.spec.ts`).
- Prefer role/text-based locators per the conventions in the repo's `CLAUDE.md`.
