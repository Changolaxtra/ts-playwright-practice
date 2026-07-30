# API07: POST To Verify Login with valid details

**Source:** [automationexercise.com/api_list](https://automationexercise.com/api_list)
**Status:** Not implemented

## Endpoint

`POST https://automationexercise.com/api/verifyLogin`

## Description

Verify login succeeds with valid, registered credentials.

## Request Parameters

`email`, `password` (form fields) — valid registered account

## Expected Response

200 OK — message: "User exists!"

## Test Steps

1. Send a POST request to `/verifyLogin` with valid `email` and `password`
2. Verify the response body `responseCode` is 200
3. Verify the response `message` is 'User exists!'

## Notes

- This API always responds with HTTP 200 at the transport level; the real result is in the JSON body's `responseCode`/`message` fields — check those explicitly, not just `response.ok()`.
- Spec file for this test case should live alongside this README (e.g. `API07.spec.ts`).
