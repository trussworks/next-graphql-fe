import { Locator, Page } from "@playwright/test"

export class IndexPage {
  readonly page: Page
  readonly h1: Locator
  readonly description: Locator
  readonly links: Locator
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
    this.docsLink = this.links.nth(0)
    this.learnLink = this.links.nth(1)
    this.examplesLink = this.links.nth(2)
    this.deployLink = this.links.nth(3)
    this.footer = page.locator("footer")
  }

  async goto() {
    await this.page.goto("http://localhost:3000/")
  }
}
