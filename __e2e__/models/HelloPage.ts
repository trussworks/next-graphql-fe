import { Locator, Page } from "@playwright/test"

const apiURL = process.env.PLAYWRIGHT_URL

export class HelloPage {
  readonly page: Page
  readonly h1: Locator
  readonly description: Locator
  readonly backendGreeting: Locator
  readonly homeLink: Locator

  constructor(page: Page) {
    this.page = page
    this.h1 = page.locator("h1")
    this.description = page.locator("p").first()
    this.backendGreeting = this.description.locator("code")
    this.homeLink = page.locator("a").first()
  }

  async goto() {
    await this.page.goto(`${apiURL}/hello`, {
      waitUntil: "networkidle",
    })
  }
}
