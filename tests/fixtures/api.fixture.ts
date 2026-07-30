import { test as base } from '@playwright/test';

// Add API clients here as you build them, e.g.:
// import { ProductsApiClient } from '../api/clients/ProductsApiClient';
//
// type ApiFixtures = {
//   productsApi: ProductsApiClient;
// };
//
// export const test = base.extend<ApiFixtures>({
//   productsApi: async ({ request }, use) => {
//     await use(new ProductsApiClient(request));
//   },
// });

export const test = base;
export { expect } from '@playwright/test';
