import { test, expect } from "@playwright/test"
import { IncidentPage } from "./models/IncidentPage"

test("Test the Incident Page", async ({ page }) => {
  const incidentPage = new IncidentPage(page)
  await incidentPage.goto()

  // Should have a breadcrumb
  await expect(incidentPage.nav).toHaveCount(1)
  await expect(incidentPage.breadcrumbs).toHaveCount(2)
  await expect(incidentPage.breadcrumbs.first()).toHaveText("Home")
  await expect(incidentPage.breadcrumbs.last()).toHaveText("Jason Ash")

  // Should have a title with the incident subject name
  await expect(incidentPage.h1).toHaveText("Jason Ash")

  // Click on first breadcrumb link (Home)
  await Promise.all([
    incidentPage.breadcrumbs.first().click(),
    page.waitForNavigation(),
  ])

  // Should be on '/incidents' page after clicking a row
  await expect(page.url()).toContain("/incidents")
})
