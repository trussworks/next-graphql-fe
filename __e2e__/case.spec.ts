import { test, expect } from "@playwright/test"
import { CasePage } from "./models/CasePage"

test("Test the Case Page", async ({ page }) => {
  const casePage = new CasePage(page)
  await casePage.goto()

  // Should have a breadcrumb
  await expect(casePage.nav).toHaveCount(1)
  await expect(casePage.breadcrumbs).toHaveCount(2)
  await expect(casePage.breadcrumbs.first()).toHaveText("Home")
  await expect(casePage.breadcrumbs.last()).toHaveText("Jason Ash")

  // Should have a title with the case subject name
  await expect(casePage.h1).toHaveText("Jason Ash")

  // Click on first breadcrumb link (Home)
  await Promise.all([
    casePage.breadcrumbs.first().click(),
    page.waitForNavigation(),
  ])

  // Should be on '/cases' page after clicking a row
  await expect(page.url()).toContain("/cases")
})
