import { test, expect } from "@playwright/test"
import { LoginPage } from "./models/LoginPage"
import { CasesPage } from "./models/CasesPage"
import { CasePage } from "./models/CasePage"

test("Test flow of the wireframe across multiple pages", async ({ page }) => {
  const loginPage = new LoginPage(page)
  await loginPage.goto()

  await expect(loginPage.page).toHaveTitle("Next Front-End")
  await expect(loginPage.legend).toHaveText("Sign In")

  await loginPage.login()

  // Should be on '/cases' page after logging in
  await expect(page.url()).toContain("/cases")
  const casesPage = new CasesPage(page)

  // Validate a few items on the cases page
  await expect(casesPage.h1).toHaveText("All Alerts")
  await expect(casesPage.table).toHaveCount(1)
  await expect(casesPage.tableHeaders.locator("text=color code")).toHaveCount(1)

  // Click on a row
  await Promise.all([
    casesPage.tableRows.first().click(),
    page.waitForNavigation(),
  ])

  // Should be on '/incidents/<incidentID>' page after clicking a row
  await expect(page.url()).toContain("/incidents/1")
  const casePage = new CasePage(page)

  // Should have a breadcrumb
  await expect(casePage.nav).toHaveCount(1)
  await expect(casePage.breadcrumbs).toHaveCount(2)
  await expect(casePage.breadcrumbs.first()).toHaveText("Home")
  await expect(casePage.breadcrumbs.last()).toHaveText("Jason Ash")

  // Should have a title with the case subject name
  await expect(casePage.h1).toHaveText("Jason Ash")

  // Click sign out
  await Promise.all([page.click("text=Sign out"), page.waitForNavigation()])

  // Should be back on login page
  await expect(page.url()).toContain("/login")

  await expect(loginPage.page).toHaveTitle("Next Front-End")
  await expect(loginPage.legend).toHaveText("Sign In")
})
