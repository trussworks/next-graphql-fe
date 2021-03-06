import { Locator, Page } from "@playwright/test"

const apiURL = process.env.PLAYWRIGHT_URL

export class IndexPage {
  readonly page: Page
  readonly header: Locator
  readonly main: Locator
  readonly h1: Locator
  readonly description: Locator
  readonly backendGreeting: Locator
  readonly incidentsLink: Locator

  constructor(page: Page) {
    this.page = page
    this.header = page.locator("header")
    this.main = page.locator("main")
    this.h1 = this.main.locator("h1")
    this.description = this.main.locator("p").first()
    this.backendGreeting = this.description.locator("code")
    this.incidentsLink = this.main.locator("a").first()
  }

  async goto() {
    await this.page.goto(`${apiURL}/`, {
      waitUntil: "networkidle",
    })
  }
}
