# TC08: Verify All Products and product detail page

**Source:** [automationexercise.com/test_cases](https://automationexercise.com/test_cases)
**Status:** Not implemented

## Objective

Browse products and validate product detail information.

## Preconditions

- Base URL: `https://automationexercise.com`
- No prior session/cookies (start from a clean browser context)

## Test Steps

1. Launch browser
2. Navigate to url 'https://automationexercise.com'
3. Verify that home page is visible successfully
4. Click on 'Products' button
5. Verify user is navigated to ALL PRODUCTS page successfully
6. The products list is visible
7. Click on 'View Product' of first product
8. User is landed to product detail page
9. Verify that detail is visible: product name, category, price, availability, condition, brand

## Notes

- Spec file for this test case should live alongside this README (e.g. `TC08.spec.ts`).
- Prefer role/text-based locators per the conventions in the repo's `CLAUDE.md`.
