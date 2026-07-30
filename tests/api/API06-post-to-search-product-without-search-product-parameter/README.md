# API06: POST To Search Product without search_product parameter

**Source:** [automationexercise.com/api_list](https://automationexercise.com/api_list)
**Status:** Not implemented

## Endpoint

`POST https://automationexercise.com/api/searchProduct`

## Description

Verify validation error when the required search parameter is missing.

## Request Parameters

None (intentionally omit `search_product`)

## Expected Response

400 (in body) — message: "Bad request, search_product parameter is missing in POST request."

## Test Steps

1. Send a POST request to `/searchProduct` with no body/parameters
2. Verify the response body `responseCode` is 400
3. Verify the response `message` reports the missing `search_product` parameter

## Notes

- This API always responds with HTTP 200 at the transport level; the real result is in the JSON body's `responseCode`/`message` fields — check those explicitly, not just `response.ok()`.
- Spec file for this test case should live alongside this README (e.g. `API06.spec.ts`).
