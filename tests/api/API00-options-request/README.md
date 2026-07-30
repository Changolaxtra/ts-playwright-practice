# API00: OPTIONS Request to an Endpoint

**Source:** Custom test case (not part of automationexercise.com's published [api_list](https://automationexercise.com/api_list) of 14 cases) — exploring how the API handles the `OPTIONS` HTTP method, complementing the "unsupported method" cases (API02, API04, API09).
**Status:** Implemented (smoke test)

## Endpoint

`OPTIONS https://automationexercise.com/api/productsList`

(Any endpoint from the [api_list](https://automationexercise.com/api_list) works for this case —
`productsList` is used here since its supported/unsupported behavior for other methods is already
documented in API01/API02.)

## Description

Send an `OPTIONS` request and observe how the API responds, since `OPTIONS` isn't one of the
methods automationexercise.com documents for any endpoint. This is an exploratory case: the
expected response isn't published, so the first part of implementing it is discovering and
recording the actual behavior.

## Request Parameters

None

## Expected Response

Confirmed empirically (`curl -i -X OPTIONS https://automationexercise.com/api/productsList`):
`OPTIONS` is **not** treated as an unsupported method here, unlike API02/API04/API09. It behaves
like a Django REST Framework metadata response:

- HTTP status: **200**
- `Allow` header lists the endpoint's supported methods, e.g. `OPTIONS, PUT, GET, POST, DELETE`
- JSON body describes the endpoint, e.g. `{"name": "Products List", "description": "", "renders": [...], "parses": [...]}`

## Test Steps

1. Send an `OPTIONS` request to `/productsList`
2. Verify the HTTP status code is 200
3. Verify the `allow` response header is present and lists at least `GET`
4. Verify the response body is JSON and contains a `name` field
5. (Optional stretch) Repeat against a couple of other endpoints (e.g. `/brandsList`,
   `/verifyLogin`) and compare their `allow` headers/method lists

## Notes

- This case is not numbered on the site; treat it as a learning exercise in exploring
  undocumented/edge-case API behavior rather than verifying a known spec.
- Unlike the documented endpoints (which always return HTTP 200 at the transport level and encode
  the real result in the body's `responseCode`), `OPTIONS` responses use real HTTP status codes
  and headers directly (DRF-style `OPTIONS` metadata) — don't assume the `responseCode`-in-body
  convention applies here.
- Spec file: `API00.spec.ts`, alongside this README.
