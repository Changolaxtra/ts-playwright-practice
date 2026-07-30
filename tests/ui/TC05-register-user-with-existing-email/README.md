# TC05: Register User with existing email

**Source:** [automationexercise.com/test_cases](https://automationexercise.com/test_cases)
**Status:** Not implemented

## Objective

Registration attempt using a previously registered email address.

## Preconditions

- Base URL: `https://automationexercise.com`
- No prior session/cookies (start from a clean browser context)

## Test Steps

1. Launch browser
2. Navigate to url 'https://automationexercise.com'
3. Verify that home page is visible successfully
4. Click on 'Signup / Login' button
5. Verify 'New User Signup!' is visible
6. Enter name and already registered email address
7. Click 'Signup' button
8. Verify error 'Email Address already exist!' is visible

## Notes

- Spec file for this test case should live alongside this README (e.g. `TC05.spec.ts`).
- Prefer role/text-based locators per the conventions in the repo's `CLAUDE.md`.
