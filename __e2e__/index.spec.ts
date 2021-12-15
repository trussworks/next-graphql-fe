import { test, expect } from "@playwright/test"
import { IndexPage } from "./models/IndexPage"

test("Test index page using Page Object Model pattern", async ({ page }) => {
  const indexPage = new IndexPage(page)
  await indexPage.goto()

  await expect(indexPage.page).toHaveTitle("SITH Front-End")
  await expect(indexPage.h1).toHaveText("Welcome to the SITH Front-End")
  await expect(indexPage.description).toHaveText(
    "Get started by editing pages/index.tsx"
  )

  // Hello Test Page Link
  const helloHref = "/hello"
  await expect(indexPage.helloLink).toHaveAttribute("href", helloHref)
  await expect(indexPage.helloLink).toContainText("Test Page")

  // Documentation Link
  const docsHref = "https://nextjs.org/docs"
  await expect(indexPage.docsLink).toHaveAttribute("href", docsHref)
  await expect(indexPage.docsLink.locator("h2")).toContainText("Documentation")

  // Learn Link
  const learnHref = "https://nextjs.org/learn"
  await expect(indexPage.learnLink).toHaveAttribute("href", learnHref)
  await expect(indexPage.learnLink.locator("h2")).toContainText("Learn")

  // Examples Link
  const examplesHref = "https://github.com/vercel/next.js/tree/master/examples"
  await expect(indexPage.examplesLink).toHaveAttribute("href", examplesHref)
  await expect(indexPage.examplesLink.locator("h2")).toContainText("Examples")

  // Deploy Link
  const deployHref =
    "https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
  await expect(indexPage.deployLink).toHaveAttribute("href", deployHref)
  await expect(indexPage.deployLink.locator("h2")).toContainText("Deploy")

  // Footer
  await expect(indexPage.footer.locator("a")).toContainText("Powered by <img")
})
