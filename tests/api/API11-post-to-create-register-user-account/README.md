# API11: POST To Create/Register User Account

**Source:** [automationexercise.com/api_list](https://automationexercise.com/api_list)
**Status:** Not implemented

## Endpoint

`POST https://automationexercise.com/api/createAccount`

## Description

Create a new user account via the API.

## Request Parameters

`name`, `email`, `password`, `title`, `birth_date`, `birth_month`, `birth_year`, `firstname`, `lastname`, `company`, `address1`, `address2`, `country`, `zipcode`, `state`, `city`, `mobile_number`

## Expected Response

201 (in body) — message: "User created!"

## Test Steps

1. Build a unique payload (unique email) with all required account fields
2. Send a POST request to `/createAccount` with the form fields
3. Verify the response body `responseCode` is 201
4. Verify the response `message` is 'User created!'
5. (Cleanup) Delete the created account via API12 so the suite stays idempotent

## Notes

- This API always responds with HTTP 200 at the transport level; the real result is in the JSON body's `responseCode`/`message` fields — check those explicitly, not just `response.ok()`.
- Spec file for this test case should live alongside this README (e.g. `API11.spec.ts`).
