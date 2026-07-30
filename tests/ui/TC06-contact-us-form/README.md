# TC06: Contact Us Form

**Source:** [automationexercise.com/test_cases](https://automationexercise.com/test_cases)
**Status:** Not implemented

## Objective

Completing and submitting the contact form with file upload.

## Preconditions

- Base URL: `https://automationexercise.com`
- No prior session/cookies (start from a clean browser context)

## Test Steps

1. Launch browser
2. Navigate to url 'https://automationexercise.com'
3. Verify that home page is visible successfully
4. Click on 'Contact Us' button
5. Verify 'GET IN TOUCH' is visible
6. Enter name, email, subject and message
7. Upload file
8. Click 'Submit' button
9. Click OK button
10. Verify success message 'Success! Your details have been submitted successfully.' is visible
11. Click 'Home' button and verify that landed to home page successfully

## Notes

- Spec file for this test case should live alongside this README (e.g. `TC06.spec.ts`).
- Prefer role/text-based locators per the conventions in the repo's `CLAUDE.md`.
