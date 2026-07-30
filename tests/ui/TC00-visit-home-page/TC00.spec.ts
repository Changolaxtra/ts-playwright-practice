import { test, expect } from '../../fixtures/pages.fixture';

test.describe('TC00: Visit Home Page', () => {
  test('loads the home page with its key elements', async ({ page, homePage }) => {
    await homePage.goto('/');

    await expect(page).toHaveTitle('Automation Exercise');
    await expect(homePage.logo).toBeVisible();
    await expect(homePage.navLink('Home')).toBeVisible();
    await expect(homePage.navLink('Products')).toBeVisible();
    await expect(homePage.navLink('Cart')).toBeVisible();
    await expect(homePage.navLink(/Signup \/ Login/)).toBeVisible();
    await expect(homePage.featuresHeading).toBeVisible();
  });
});
