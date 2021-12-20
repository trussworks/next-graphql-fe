import React from "react"
import { screen } from "@testing-library/react"
import {
  renderWithQueryClient as render,
  validateA11y,
} from "../../utils/test-utils"
import CasesPage from "../../pages/cases"

jest.mock("next/router", () => ({
  useRouter() {
    return {
      route: "/cases",
      pathname: "/cases",
      query: {},
      asPath: "/cases",
    }
  },
}))

// TODO: Until we get MSW setup, we can only test the no-data state
describe("Cases Page", () => {
  it("displays page content while loading", () => {
    render(<CasesPage />)

    const h1 = screen.getByRole("heading")
    expect(h1).toBeInTheDocument()
    expect(h1.textContent).toMatchInlineSnapshot(`"All Alerts"`)

    const subHeading = screen.getByRole("paragraph")
    expect(subHeading).toBeInTheDocument()
    expect(subHeading.textContent).toMatchInlineSnapshot(
      `"View of all alerts that are active in the system today."`
    )

    const loadingText = screen.getByText(/loading.../i)
    expect(loadingText).toBeInTheDocument()
  })

  it("matches snapshot while", () => {
    const { container } = render(<CasesPage />)

    expect(container).toMatchSnapshot()
  })

  it("is accessiable while loading", async () => {
    const { container } = render(<CasesPage />)

    await validateA11y(container)
  })
})
