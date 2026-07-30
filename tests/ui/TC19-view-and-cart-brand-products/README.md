# TC19: View & Cart Brand Products

**Source:** [automationexercise.com/test_cases](https://automationexercise.com/test_cases)
**Status:** Not implemented

## Objective

Browsing and purchasing by brand.

## Preconditions

- Base URL: `https://automationexercise.com`
- No prior session/cookies (start from a clean browser context)

## Test Steps

1. Launch browser
2. Navigate to url 'https://automationexercise.com'
3. Click on 'Products' button
4. Verify that Brands are visible on left side bar
5. Click on any brand name
6. Verify that user is navigated to brand page and brand products are displayed
7. On left side bar, click on any other brand link
8. Verify that user is navigated to that brand page and can see products

## Notes

- Spec file for this test case should live alongside this README (e.g. `TC19.spec.ts`).
- Prefer role/text-based locators per the conventions in the repo's `CLAUDE.md`.
