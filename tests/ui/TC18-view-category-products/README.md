# TC18: View Category Products

**Source:** [automationexercise.com/test_cases](https://automationexercise.com/test_cases)
**Status:** Not implemented

## Objective

Navigation and browsing by product categories.

## Preconditions

- Base URL: `https://automationexercise.com`
- No prior session/cookies (start from a clean browser context)

## Test Steps

1. Launch browser
2. Navigate to url 'https://automationexercise.com'
3. Verify that categories are visible on left side bar
4. Click on 'Women' category
5. Click on any category link under 'Women' category, for example: Dress
6. Verify that category page is displayed and confirm text "WOMEN - TOPS PRODUCTS"
7. On left side bar, click on any sub-category link of 'Men' category
8. Verify that user is navigated to that category page

## Notes

- Spec file for this test case should live alongside this README (e.g. `TC18.spec.ts`).
- Prefer role/text-based locators per the conventions in the repo's `CLAUDE.md`.
