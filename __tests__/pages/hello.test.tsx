import React from "react"
import { screen } from "@testing-library/react"
import {
  renderWithQueryClient as render,
  validateA11y,
} from "../../utils/test-utils"
import HelloPage from "../../pages/hello"

describe("Hello Page", () => {
  it("it shows loading message", () => {
    render(<HelloPage />)

    const loadingText = screen.getByText("loading...")

    expect(loadingText).toBeInTheDocument()
  })

  it("matches loading snapshot", () => {
    const { container } = render(<HelloPage />)

    expect(container).toMatchSnapshot()
  })

  it("is accessiable", async () => {
    const { container } = render(<HelloPage />)

    await validateA11y(container)
  })
})
