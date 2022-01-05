import { Locator, Page } from "@playwright/test"

const apiURL = process.env.PLAYWRIGHT_URL

export class LoginPage {
  readonly page: Page
  readonly header: Locator
  readonly legend: Locator
  readonly emailInput: Locator
  readonly passwordInput: Locator
  readonly showHidePassword: Locator
  readonly submitBtn: Locator
  readonly forgotPassword: Locator
  atPage: boolean

  constructor(page: Page) {
    this.page = page
    this.header = page.locator("header")
    this.legend = page.locator("legend")
    this.emailInput = page.locator('input[name="username"]')
    this.passwordInput = page.locator('input[name="password"]')
    this.showHidePassword = page.locator('a[title="Show password"]')
    this.submitBtn = page.locator('button[type="submit"]')
    this.forgotPassword = page.locator('a[title="Forgot password"]')
    this.atPage = false
  }

  async goto() {
    await this.page.goto(`${apiURL}/login`)
    this.atPage = true
  }

  async login(
    username: string = "Test@user",
    password: string = "fake-password"
  ) {
    if (!this.atPage) await this.goto()

    await this.emailInput.fill(username)
    await this.passwordInput.fill(password)

    await Promise.all([this.page.waitForNavigation(), this.submitBtn.click()])
  }
}
