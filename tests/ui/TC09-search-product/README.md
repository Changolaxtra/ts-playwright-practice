# TC09: Search Product

**Source:** [automationexercise.com/test_cases](https://automationexercise.com/test_cases)
**Status:** Not implemented

## Objective

Product search functionality and results verification.

## Preconditions

- Base URL: `https://automationexercise.com`
- No prior session/cookies (start from a clean browser context)

## Test Steps

1. Launch browser
2. Navigate to url 'https://automationexercise.com'
3. Verify that home page is visible successfully
4. Click on 'Products' button
5. Verify user is navigated to ALL PRODUCTS page successfully
6. Enter product name in search input and click search button
7. Verify 'SEARCHED PRODUCTS' is visible
8. Verify all the products related to search are visible

## Notes

- Spec file for this test case should live alongside this README (e.g. `TC09.spec.ts`).
- Prefer role/text-based locators per the conventions in the repo's `CLAUDE.md`.
