# TC03: Login User with incorrect email and password

**Source:** [automationexercise.com/test_cases](https://automationexercise.com/test_cases)
**Status:** Not implemented

## Objective

Attempt login with invalid credentials and verify error message.

## Preconditions

- Base URL: `https://automationexercise.com`
- No prior session/cookies (start from a clean browser context)

## Test Steps

1. Launch browser
2. Navigate to url 'https://automationexercise.com'
3. Verify that home page is visible successfully
4. Click on 'Signup / Login' button
5. Verify 'Login to your account' is visible
6. Enter incorrect email address and password
7. Click 'login' button
8. Verify error 'Your email or password is incorrect!' is visible

## Notes

- Spec file for this test case should live alongside this README (e.g. `TC03.spec.ts`).
- Prefer role/text-based locators per the conventions in the repo's `CLAUDE.md`.
