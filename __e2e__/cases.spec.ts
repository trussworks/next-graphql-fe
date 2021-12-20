import { test, expect } from "@playwright/test"
import { CasesPage } from "./models/CasesPage"

test("Test the Cases Page", async ({ page }) => {
  const casesPage = new CasesPage(page)
  await casesPage.goto()

  await expect(casesPage.h1).toHaveText("All Alerts")
  await expect(casesPage.paragraph).toHaveText(
    "View of all alerts that are active in the system today."
  )
  await expect(casesPage.table).toHaveCount(1)

  // Validate headers
  await expect(casesPage.tableHeaders.locator("text=color code")).toHaveCount(1)
  await expect(casesPage.tableHeaders.locator("text=name")).toHaveCount(1)
  await expect(
    casesPage.tableHeaders.locator("text=date received")
  ).toHaveCount(1)
  await expect(casesPage.tableHeaders.locator("text=case status")).toHaveCount(
    1
  )
  await expect(
    casesPage.tableHeaders.locator("text=int analyst assigned")
  ).toHaveCount(1)

  // Validate there are 10 rows, could validate the table cells as well
  await expect(casesPage.tableRows).toHaveCount(10)

  // Click on a row
  await Promise.all([
    casesPage.tableRows.first().click(),
    page.waitForNavigation(),
  ])

  // Should be on '/case/<caseID>' page after clicking a row
  await expect(page.url()).toContain("/case/1")
})
