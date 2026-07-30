# API03: Get All Brands List

**Source:** [automationexercise.com/api_list](https://automationexercise.com/api_list)
**Status:** Not implemented

## Endpoint

`GET https://automationexercise.com/api/brandsList`

## Description

Retrieve the full list of brands.

## Request Parameters

None

## Expected Response

200 OK — JSON body with a `brands` array (id, brand name)

## Test Steps

1. Send a GET request to `/brandsList`
2. Verify the response status code is 200
3. Verify the response body contains a `brands` array
4. Verify each brand entry has an `id` and `brand` name

## Notes

- This API always responds with HTTP 200 at the transport level; the real result is in the JSON body's `responseCode`/`message` fields — check those explicitly, not just `response.ok()`.
- Spec file for this test case should live alongside this README (e.g. `API03.spec.ts`).
