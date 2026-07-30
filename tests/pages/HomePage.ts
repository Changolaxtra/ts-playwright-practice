import type { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class HomePage extends BasePage {
  readonly logo: Locator;
  readonly nav: Locator;
  readonly featuresHeading: Locator;

  constructor(page: Page) {
    super(page);
    this.logo = page.getByAltText('Website for automation practice');
    this.nav = page.locator('#header');
    this.featuresHeading = page.getByRole('heading', { level: 2, name: 'Features Items' });
  }

  navLink(name: string | RegExp): Locator {
    return this.nav.getByRole('link', { name });
  }
}
