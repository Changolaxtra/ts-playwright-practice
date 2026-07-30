# API09: DELETE To Verify Login

**Source:** [automationexercise.com/api_list](https://automationexercise.com/api_list)
**Status:** Not implemented

## Endpoint

`DELETE https://automationexercise.com/api/verifyLogin`

## Description

Verify the endpoint rejects an unsupported HTTP method.

## Request Parameters

None

## Expected Response

405 (in body) — message: "This request method is not supported."

## Test Steps

1. Send a DELETE request to `/verifyLogin`
2. Verify the response body `responseCode` is 405
3. Verify the response `message` is 'This request method is not supported.'

## Notes

- This API always responds with HTTP 200 at the transport level; the real result is in the JSON body's `responseCode`/`message` fields — check those explicitly, not just `response.ok()`.
- Spec file for this test case should live alongside this README (e.g. `API09.spec.ts`).
