# API14: GET user account detail by email

**Source:** [automationexercise.com/api_list](https://automationexercise.com/api_list)
**Status:** Not implemented

## Endpoint

`GET https://automationexercise.com/api/getUserDetailByEmail`

## Description

Retrieve a user's account details by email.

## Request Parameters

`email` (query parameter) — of an existing account

## Expected Response

200 OK — JSON body with a `user` object matching the account details

## Test Steps

1. Ensure a test account exists (e.g. created via API11)
2. Send a GET request to `/getUserDetailByEmail?email=<email>`
3. Verify the response status code is 200
4. Verify the response body `user` object matches the created account's details
5. (Cleanup) Delete the account via API12

## Notes

- This API always responds with HTTP 200 at the transport level; the real result is in the JSON body's `responseCode`/`message` fields — check those explicitly, not just `response.ok()`.
- Spec file for this test case should live alongside this README (e.g. `API14.spec.ts`).
