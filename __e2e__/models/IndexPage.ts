import { Locator, Page } from "@playwright/test"

const apiURL = process.env.PLAYWRIGHT_URL

export class IndexPage {
  readonly page: Page
  readonly h1: Locator
  readonly description: Locator
  readonly links: Locator
  readonly helloLink: Locator
  readonly docsLink: Locator
  readonly learnLink: Locator
  readonly examplesLink: Locator
  readonly deployLink: Locator
  readonly footer: Locator

  constructor(page: Page) {
    this.page = page
    this.h1 = page.locator("h1")
    this.description = page.locator("p").first()
    this.links = page.locator("a")
    this.helloLink = this.links.nth(0)
    this.docsLink = this.links.nth(1)
    this.learnLink = this.links.nth(2)
    this.examplesLink = this.links.nth(3)
    this.deployLink = this.links.nth(4)
    this.footer = page.locator("footer")
  }

  async goto() {
    await this.page.goto(`${apiURL}/`)
  }
}
