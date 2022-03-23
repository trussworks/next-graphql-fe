import { test, expect } from "@playwright/test"
import { IncidentsPage } from "./models/IncidentsPage"

test("Test the Incidents Page", async ({ page }) => {
  const incidentsPage = new IncidentsPage(page)
  await incidentsPage.goto()

  await expect(incidentsPage.h1).toHaveText("All Alerts")
  await expect(incidentsPage.paragraph).toHaveText(
    "View of all alerts that are active in the system today."
  )
  await expect(incidentsPage.table).toHaveCount(1)

  // Validate headers
  await expect(incidentsPage.tableHeaders.locator("text=color code")).toHaveCount(1)
  await expect(incidentsPage.tableHeaders.locator("text=name")).toHaveCount(1)
  await expect(
    incidentsPage.tableHeaders.locator("text=date received")
  ).toHaveCount(1)
  await expect(incidentsPage.tableHeaders.locator("text=status")).toHaveCount(
    1
  )
  await expect(
    incidentsPage.tableHeaders.locator("text=int analyst assigned")
  ).toHaveCount(1)

  // Validate there are 10 rows, could validate the table cells as well
  await expect(incidentsPage.tableRows).toHaveCount(10)

  // Click on a row
  await Promise.all([
    incidentsPage.tableRows.first().click(),
    page.waitForNavigation(),
  ])

  // Should be on '/incidents/<incidentID>' page after clicking a row
  await expect(page.url()).toContain("/incidents/1")
})
