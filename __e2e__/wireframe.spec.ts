import { test, expect } from "@playwright/test"
import { LoginPage } from "./models/LoginPage"
import { IncidentsPage } from "./models/IncidentsPage"
import { IncidentPage } from "./models/IncidentPage"

test("Test flow of the wireframe across multiple pages", async ({ page }) => {
  const loginPage = new LoginPage(page)
  await loginPage.goto()

  await expect(loginPage.page).toHaveTitle("Next Front-End")
  await expect(loginPage.legend).toHaveText("Sign In")

  await loginPage.login()

  // Should be on '/incidents' page after logging in
  await expect(page.url()).toContain("/incidents")
  const incidentsPage = new IncidentsPage(page)

  // Validate a few items on the incidents page
  await expect(incidentsPage.h1).toHaveText("All Alerts")
  await expect(incidentsPage.table).toHaveCount(1)
  await expect(incidentsPage.tableHeaders.locator("text=color code")).toHaveCount(1)

  // Click on a row
  await Promise.all([
    incidentsPage.tableRows.first().click(),
    page.waitForNavigation(),
  ])

  // Should be on '/incidents/<incidentID>' page after clicking a row
  await expect(page.url()).toContain("/incidents/1")
  const incidentPage = new IncidentPage(page)

  // Should have a breadcrumb
  await expect(incidentPage.nav).toHaveCount(1)
  await expect(incidentPage.breadcrumbs).toHaveCount(2)
  await expect(incidentPage.breadcrumbs.first()).toHaveText("Home")
  await expect(incidentPage.breadcrumbs.last()).toHaveText("Jason Ash")

  // Should have a title with the incident subject name
  await expect(incidentPage.h1).toHaveText("Jason Ash")

  // Click sign out
  await Promise.all([page.click("text=Sign out"), page.waitForNavigation()])

  // Should be back on login page
  await expect(page.url()).toContain("/login")

  await expect(loginPage.page).toHaveTitle("Next Front-End")
  await expect(loginPage.legend).toHaveText("Sign In")
})
