# API05: POST To Search Product

**Source:** [automationexercise.com/api_list](https://automationexercise.com/api_list)
**Status:** Not implemented

## Endpoint

`POST https://automationexercise.com/api/searchProduct`

## Description

Search products by a search term.

## Request Parameters

`search_product` (form field) — e.g. `top`, `tshirt`, `jean`

## Expected Response

200 OK — JSON body with a `products` array of matching products

## Test Steps

1. Send a POST request to `/searchProduct` with form field `search_product=top`
2. Verify the response status code is 200
3. Verify the response body contains a `products` array
4. Verify returned products' names/categories relate to the search term

## Notes

- This API always responds with HTTP 200 at the transport level; the real result is in the JSON body's `responseCode`/`message` fields — check those explicitly, not just `response.ok()`.
- Spec file for this test case should live alongside this README (e.g. `API05.spec.ts`).
