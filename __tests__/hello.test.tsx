import React from "react"
import { screen } from "@testing-library/react"
import {
  renderWithQueryClient as render,
  validateA11y,
} from "../utils/test-utils"
import HelloPage from "../pages/hello"

describe("Hello Page", () => {
  it("renders a heading", () => {
    render(<HelloPage />)

    const heading = screen.getByRole("heading", {
      name: /hello, welcome to the test page/i,
    })

    expect(heading).toBeInTheDocument()
  })

  it("it shows loading message", () => {
    render(<HelloPage />)

    const loadingText = screen.getByText("loading...")

    expect(loadingText).toBeInTheDocument()
  })

  it("is accessiable", async () => {
    const { container } = render(<HelloPage />)

    await validateA11y(container)
  })
})
