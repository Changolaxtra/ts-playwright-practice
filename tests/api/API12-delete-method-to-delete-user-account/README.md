# API12: DELETE METHOD To Delete User Account

**Source:** [automationexercise.com/api_list](https://automationexercise.com/api_list)
**Status:** Not implemented

## Endpoint

`DELETE https://automationexercise.com/api/deleteAccount`

## Description

Delete an existing user account via the API.

## Request Parameters

`email`, `password` (form fields) — of an existing account

## Expected Response

200 (in body) — message: "Account deleted!"

## Test Steps

1. Ensure a test account exists (e.g. created via API11)
2. Send a DELETE request to `/deleteAccount` with `email` and `password`
3. Verify the response body `responseCode` is 200
4. Verify the response `message` is 'Account deleted!'

## Notes

- This API always responds with HTTP 200 at the transport level; the real result is in the JSON body's `responseCode`/`message` fields — check those explicitly, not just `response.ok()`.
- Spec file for this test case should live alongside this README (e.g. `API12.spec.ts`).
