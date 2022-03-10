import { Locator, Page } from "@playwright/test"

const apiURL = process.env.PLAYWRIGHT_URL

export class CasesPage {
  readonly page: Page
  readonly h1: Locator
  readonly paragraph: Locator
  readonly table: Locator
  readonly tableHead: Locator
  readonly tableHeaders: Locator
  readonly tableBody: Locator
  readonly tableRows: Locator

  constructor(page: Page) {
    this.page = page
    this.h1 = page.locator("h1")
    this.paragraph = page.locator('p[role="paragraph"]')
    this.table = page.locator("table")
    this.tableHead = this.table.locator("thead")
    this.tableHeaders = this.tableHead.locator("th")
    this.tableBody = this.table.locator("tbody")
    this.tableRows = this.tableBody.locator("tr")
  }

  async goto() {
    await this.page.goto(`${apiURL}/incidents`)
  }
}
