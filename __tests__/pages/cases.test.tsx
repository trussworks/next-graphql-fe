import React from "react"
import { screen, waitForElementToBeRemoved } from "@testing-library/react"
import {
  renderWithQueryClient as render,
  validateA11y,
} from "../../utils/test-utils"
import CasesPage from "../../pages/cases"

import mockCaseData from "../../__mocks__/mockCaseData.json"

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

  it("matches snapshot while loading", () => {
    const { container } = render(<CasesPage />)

    expect(container).toMatchSnapshot()
  })

  it("displays page content with fetched data", async () => {
    fetchMock.mockResponseOnce(JSON.stringify(mockCaseData))

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

    await waitForElementToBeRemoved(() => screen.queryByText("loading..."))

    // Should now have be showing table
    // Check table headers are present
    expect(
      screen.getByRole("columnheader", {
        name: /color code/i,
      })
    ).toBeInTheDocument()
    expect(
      screen.getByRole("columnheader", {
        name: /name/i,
      })
    ).toBeInTheDocument()
    expect(
      screen.getByRole("columnheader", {
        name: /date received/i,
      })
    ).toBeInTheDocument()
    expect(
      screen.getByRole("columnheader", {
        name: /case status/i,
      })
    ).toBeInTheDocument()
    expect(
      screen.getByRole("columnheader", {
        name: /int analyst assigned/i,
      })
    ).toBeInTheDocument()

    // check out some table content
    expect(screen.getAllByRole("rowheader").length).toBe(10)
    expect(screen.getAllByText(/gray/i).length).toBe(5)
    expect(
      screen.getByRole("rowheader", { name: /jason ash/i })
    ).toBeInTheDocument()
    expect(screen.getAllByRole("cell", { name: /12\/10\/2021/i }).length).toBe(
      5
    )
    expect(screen.getAllByRole("cell", { name: /pre_inquiry/i }).length).toBe(3)
    expect(screen.getByRole("cell", { name: /lisa/i })).toBeInTheDocument()
  })

  it("matches snapshot with fetched data", async () => {
    fetchMock.mockResponseOnce(JSON.stringify(mockCaseData))

    const { container } = render(<CasesPage />)

    await waitForElementToBeRemoved(() => screen.queryByText("loading..."))

    expect(container).toMatchSnapshot()
  })

  it("gracefully handles fetch error and displays error message", async () => {
    fetchMock.mockRejectedValueOnce(new Error("Test Fetch Error"))

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

    await waitForElementToBeRemoved(() => screen.queryByText("loading..."))

    // Should now show error message and no table
    expect(screen.getByText("Test Fetch Error")).toBeInTheDocument()
    expect(screen.queryByRole("table")).not.toBeInTheDocument()
  })

  it("is accessiable ", async () => {
    fetchMock.mockResponseOnce(JSON.stringify(mockCaseData))
    const { container } = render(<CasesPage />)

    await waitForElementToBeRemoved(() => screen.queryByText("loading..."))

    await validateA11y(container)
  })
})
