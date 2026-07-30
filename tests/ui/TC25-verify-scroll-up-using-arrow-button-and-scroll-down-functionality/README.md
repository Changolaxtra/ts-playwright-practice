# TC25: Verify Scroll Up using 'Arrow' button and Scroll Down functionality

**Source:** [automationexercise.com/test_cases](https://automationexercise.com/test_cases)
**Status:** Not implemented

## Objective

Page scrolling with arrow button navigation.

## Preconditions

- Base URL: `https://automationexercise.com`
- No prior session/cookies (start from a clean browser context)

## Test Steps

1. Launch browser
2. Navigate to url 'https://automationexercise.com'
3. Verify that home page is visible successfully
4. Scroll down page to bottom
5. Verify 'SUBSCRIPTION' is visible
6. Click on arrow at bottom right side to move upward
7. Verify that page is scrolled up and "Full-Fledged practice website for Automation Engineers" text is visible on screen

## Notes

- Spec file for this test case should live alongside this README (e.g. `TC25.spec.ts`).
- Prefer role/text-based locators per the conventions in the repo's `CLAUDE.md`.
