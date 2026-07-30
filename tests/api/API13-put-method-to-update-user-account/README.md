# API13: PUT METHOD To Update User Account

**Source:** [automationexercise.com/api_list](https://automationexercise.com/api_list)
**Status:** Not implemented

## Endpoint

`PUT https://automationexercise.com/api/updateAccount`

## Description

Update an existing user account via the API.

## Request Parameters

`name`, `email`, `password`, `title`, `birth_date`, `birth_month`, `birth_year`, `firstname`, `lastname`, `company`, `address1`, `address2`, `country`, `zipcode`, `state`, `city`, `mobile_number`

## Expected Response

200 (in body) — message: "User updated!"

## Test Steps

1. Ensure a test account exists (e.g. created via API11)
2. Send a PUT request to `/updateAccount` with the existing `email` and updated field values
3. Verify the response body `responseCode` is 200
4. Verify the response `message` is 'User updated!'
5. Verify the update via API14 (get user detail by email)
6. (Cleanup) Delete the account via API12

## Notes

- This API always responds with HTTP 200 at the transport level; the real result is in the JSON body's `responseCode`/`message` fields — check those explicitly, not just `response.ok()`.
- Spec file for this test case should live alongside this README (e.g. `API13.spec.ts`).
