import React from "react"
import { axe } from "jest-axe"

import {
  renderWithQueryClient as render,
  validateA11y,
} from "../../utils/test-utils"
import Home from "../../pages/index"

describe("Home", () => {
  it("is accessiable", async () => {
    const { container } = render(<Home />)

    await validateA11y(container)
  })

  it("fails for inaccessable components", async () => {
    const InaccessiableComponent = () => (
      // eslint-disable-next-line
      <img src="/vercel.svg" width={72} height={16} />
    )

    const { container } = render(<InaccessiableComponent />)

    // Run aXe a11y scan on the rendered container
    const results = await axe(container)

    // Assert there are a11y violations (not no violations)
    expect(results).not.toHaveNoViolations()
  })
})
