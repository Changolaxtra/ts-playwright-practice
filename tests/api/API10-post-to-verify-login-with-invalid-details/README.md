# API10: POST To Verify Login with invalid details

**Source:** [automationexercise.com/api_list](https://automationexercise.com/api_list)
**Status:** Not implemented

## Endpoint

`POST https://automationexercise.com/api/verifyLogin`

## Description

Verify login fails for a non-existent account.

## Request Parameters

`email`, `password` (form fields) — credentials that do not exist

## Expected Response

404 (in body) — message: "User not found!"

## Test Steps

1. Send a POST request to `/verifyLogin` with an unregistered `email`/`password`
2. Verify the response body `responseCode` is 404
3. Verify the response `message` is 'User not found!'

## Notes

- This API always responds with HTTP 200 at the transport level; the real result is in the JSON body's `responseCode`/`message` fields — check those explicitly, not just `response.ok()`.
- Spec file for this test case should live alongside this README (e.g. `API10.spec.ts`).
