import { test, expect } from "@playwright/test"
import { HelloPage } from "./models/HelloPage"

test("Test the hello test page using Page Object Model pattern", async ({
  page,
}) => {
  const helloPage = new HelloPage(page)
  await helloPage.goto()

  await expect(helloPage.page).toHaveTitle("Next Front-End")
  await expect(helloPage.h1).toHaveText("Hello, welcome to the test page")
  await expect(helloPage.description).toContainText(
    "Greeting from the Backend:"
  )
  await expect(helloPage.backendGreeting).toHaveText("Hello World!")

  await expect(helloPage.homeLink).toHaveAttribute("href", "/")
})
