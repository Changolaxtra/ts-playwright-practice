# API02: POST To All Products List

**Source:** [automationexercise.com/api_list](https://automationexercise.com/api_list)
**Status:** Not implemented

## Endpoint

`POST https://automationexercise.com/api/productsList`

## Description

Verify the endpoint rejects an unsupported HTTP method.

## Request Parameters

None

## Expected Response

405 Method Not Allowed — message: "This request method is not supported."

## Test Steps

1. Send a POST request to `/productsList`
2. Verify the response status code is 200 (API always returns HTTP 200; check body for the real result)
3. Verify the response body `responseCode` is 405
4. Verify the response `message` is 'This request method is not supported.'

## Notes

- This API always responds with HTTP 200 at the transport level; the real result is in the JSON body's `responseCode`/`message` fields — check those explicitly, not just `response.ok()`.
- Spec file for this test case should live alongside this README (e.g. `API02.spec.ts`).
