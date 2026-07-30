# API01: Get All Products List

**Source:** [automationexercise.com/api_list](https://automationexercise.com/api_list)
**Status:** Not implemented

## Endpoint

`GET https://automationexercise.com/api/productsList`

## Description

Retrieve the full list of products.

## Request Parameters

None

## Expected Response

200 OK — JSON body with a `products` array (id, name, price, brand, category, etc.)

## Test Steps

1. Send a GET request to `/productsList`
2. Verify the response status code is 200
3. Verify the response body contains a `products` array
4. Verify each product has expected fields (id, name, price, brand, category)

## Notes

- This API always responds with HTTP 200 at the transport level; the real result is in the JSON body's `responseCode`/`message` fields — check those explicitly, not just `response.ok()`.
- Spec file for this test case should live alongside this README (e.g. `API01.spec.ts`).
