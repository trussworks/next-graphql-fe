import React from "react"
import { screen } from "@testing-library/react"
import { renderWithQueryClient as render, validateA11y } from "utils/test-utils"
import CasePage from "pages/incidents/[id]"

jest.mock("next/router", () => ({
  useRouter() {
    return {
      route: "/incidents/[id]",
      pathname: "/incidents/[id]",
      query: { id: 1 },
      asPath: "/incidents/1",
    }
  },
}))

// TODO: Until we get MSW setup, we can only test the no-data state
describe("Case Page", () => {
  it("displays page content while loading", () => {
    render(<CasePage />)

    // Should still have breadcrumb
    expect(screen.getByRole("navigation")).toBeInTheDocument()
    expect(screen.getByText(/home/i)).toBeInTheDocument()

    expect(screen.getByText(/loading.../i)).toBeInTheDocument()
  })

  it("matches snapshot while loading", () => {
    const { container } = render(<CasePage />)

    expect(container).toMatchSnapshot()
  })

  it("is accessiable while loading", async () => {
    const { container } = render(<CasePage />)

    await validateA11y(container)
  })
})
