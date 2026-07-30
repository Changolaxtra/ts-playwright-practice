# TC02: Login User with correct email and password

**Source:** [automationexercise.com/test_cases](https://automationexercise.com/test_cases)
**Status:** Not implemented

## Objective

Login with valid credentials and account deletion.

## Preconditions

- Base URL: `https://automationexercise.com`
- No prior session/cookies (start from a clean browser context)

## Test Steps

1. Launch browser
2. Navigate to url 'https://automationexercise.com'
3. Verify that home page is visible successfully
4. Click on 'Signup / Login' button
5. Verify 'Login to your account' is visible
6. Enter correct email address and password
7. Click 'login' button
8. Verify that 'Logged in as username' is visible
9. Click 'Delete Account' button
10. Verify that 'ACCOUNT DELETED!' is visible

## Notes

- Spec file for this test case should live alongside this README (e.g. `TC02.spec.ts`).
- Prefer role/text-based locators per the conventions in the repo's `CLAUDE.md`.
