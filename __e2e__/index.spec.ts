import { test, expect } from "@playwright/test"
import { IndexPage } from "./models/IndexPage"

test("Test the Index page using Page Object Model pattern", async ({
  page,
}) => {
  const indexPage = new IndexPage(page)
  await indexPage.goto()

  await expect(indexPage.h1).toHaveText("Hello, welcome to the JEDI Project")
  await expect(indexPage.description).toContainText(
    "Greetings from the Backend:"
  )
  await expect(indexPage.backendGreeting).toHaveText("Hello World!")

  await expect(indexPage.homeLink).toHaveAttribute("href", "/incidents")
})
