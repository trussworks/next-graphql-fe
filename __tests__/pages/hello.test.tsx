import React from "react"
import { screen, waitForElementToBeRemoved } from "@testing-library/react"
import fetchMock from "jest-fetch-mock"

import {
  renderWithQueryClient as render,
  validateA11y,
} from "../../utils/test-utils"
import HelloPage from "../../pages/hello"

const mockSuccessResponse = JSON.stringify({
  data: {
    hello: "Hello World!",
  },
})

describe("Hello Page", () => {
  it("shows loading message", () => {
    render(<HelloPage />)

    const loadingText = screen.getByText("loading...")

    expect(loadingText).toBeInTheDocument()
  })

  it("matches loading snapshot", () => {
    const { container } = render(<HelloPage />)

    expect(container).toMatchSnapshot()
  })

  it("displays fetched data", async () => {
    fetchMock.mockResponseOnce(mockSuccessResponse)

    render(<HelloPage />)

    // shows loading
    expect(screen.getByText("loading...")).toBeInTheDocument()

    // wait to finish loading
    await waitForElementToBeRemoved(() => screen.queryByText("loading..."))

    // now shows retrived message
    expect(await screen.findByText("Hello World!")).toBeInTheDocument()
  })

  it("matches snapshot with fetched data", async () => {
    fetchMock.mockResponseOnce(mockSuccessResponse)

    const { container } = render(<HelloPage />)
    await waitForElementToBeRemoved(() => screen.queryByText("loading..."))

    expect(container).toMatchSnapshot()
  })

  it("gracefully handles fetch error and displays error message", async () => {
    fetchMock.mockRejectedValueOnce(new Error("Test Fetch Error"))

    render(<HelloPage />)

    // shows loading
    expect(screen.getByText("loading...")).toBeInTheDocument()

    // wait to finish loading
    await waitForElementToBeRemoved(() => screen.queryByText("loading..."))

    // now shows error message
    expect(screen.getByText("Test Fetch Error")).toBeInTheDocument()
  })

  it("is accessiable", async () => {
    fetchMock.mockResponseOnce(mockSuccessResponse)

    const { container } = render(<HelloPage />)
    await waitForElementToBeRemoved(() => screen.queryByText("loading..."))

    await validateA11y(container)
  })
})
