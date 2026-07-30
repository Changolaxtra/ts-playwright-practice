# API08: POST To Verify Login without email parameter

**Source:** [automationexercise.com/api_list](https://automationexercise.com/api_list)
**Status:** Not implemented

## Endpoint

`POST https://automationexercise.com/api/verifyLogin`

## Description

Verify validation error when a required parameter is missing.

## Request Parameters

`password` only (intentionally omit `email`)

## Expected Response

400 (in body) — message: "Bad request, email or password parameter is missing in POST request."

## Test Steps

1. Send a POST request to `/verifyLogin` with only `password` (no `email`)
2. Verify the response body `responseCode` is 400
3. Verify the response `message` reports the missing parameter

## Notes

- This API always responds with HTTP 200 at the transport level; the real result is in the JSON body's `responseCode`/`message` fields — check those explicitly, not just `response.ok()`.
- Spec file for this test case should live alongside this README (e.g. `API08.spec.ts`).
