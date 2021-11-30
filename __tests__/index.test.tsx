import React from "react"
import { render, screen } from "@testing-library/react"
import Home from "../pages/index"
import { axe } from "jest-axe"

describe("Home", () => {
  it("renders a heading", () => {
    render(<Home />)

    const heading = screen.getByRole("heading", {
      name: /welcome to the sith front-end/i,
    })

    expect(heading).toBeInTheDocument()
  })

  it("is accessiable", async () => {
    const { container } = render(<Home />)

    // Run aXe a11y scan on the rendered container
    const results = await axe(container)

    // Assert there are no a11y violations
    expect(results).toHaveNoViolations()
  })
})
