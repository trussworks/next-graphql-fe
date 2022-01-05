import { test, expect } from "@playwright/test"
import { LoginPage } from "./models/LoginPage"

test("Test the Login Page", async ({ page }) => {
  const loginPage = new LoginPage(page)
  await loginPage.goto()

  await expect(loginPage.page).toHaveTitle("SITH Front-End")
  await expect(loginPage.legend).toHaveText("Sign In")

  // Form inputs are present
  await expect(loginPage.emailInput).toHaveCount(1)
  await expect(loginPage.passwordInput).toHaveCount(1)

  // Toggle and verify show/hide password
  await expect(loginPage.passwordInput).toHaveJSProperty("type", "password")
  await expect(loginPage.passwordInput).not.toHaveJSProperty("type", "text")
  await loginPage.showHidePassword.click() //Toggle show/hide
  await expect(loginPage.passwordInput).not.toHaveJSProperty("type", "password")
  await expect(loginPage.passwordInput).toHaveJSProperty("type", "text")
  await loginPage.showHidePassword.click() //Toggle show/hide
  await expect(loginPage.passwordInput).toHaveJSProperty("type", "password")
  await expect(loginPage.passwordInput).not.toHaveJSProperty("type", "text")

  // Doesnt do anything so just verify it is present
  await expect(loginPage.forgotPassword).toHaveCount(1)

  // Submit a login
  await loginPage.login()

  // Should be on '/cases' page after logging in
  expect(page.url()).toContain("/cases")
})
