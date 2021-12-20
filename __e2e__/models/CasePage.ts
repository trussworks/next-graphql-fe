import { Locator, Page } from "@playwright/test"

const apiURL = process.env.PLAYWRIGHT_URL

export class CasePage {
  readonly page: Page
  readonly nav: Locator
  readonly breadcrumbs: Locator
  readonly h1: Locator

  constructor(page: Page) {
    this.page = page
    this.nav = page.locator("nav")
    this.breadcrumbs = this.nav.locator("li")
    this.h1 = page.locator("h1")
  }

  async goto() {
    await this.page.goto(`${apiURL}/case/1`)
  }
}
