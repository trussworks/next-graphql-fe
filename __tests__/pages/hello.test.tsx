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

/** Renders the Hello oPage and waits for the loading message to be removed */
const renderLoaded = async () => {
  // render page
  const renderResult = render(<HelloPage />)

  // wait to finish loading
  await waitForElementToBeRemoved(() => screen.queryByText("loading..."))

  return renderResult
}

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

    await renderLoaded()

    // now shows retrived message
    expect(await screen.findByText("Hello World!")).toBeInTheDocument()
  })

  it("matches snapshot with fetched data", async () => {
    fetchMock.mockResponseOnce(mockSuccessResponse)

    const { container } = await renderLoaded()

    expect(container).toMatchSnapshot()
  })

  it("gracefully handles fetch error and displays error message", async () => {
    fetchMock.mockRejectedValueOnce(new Error("Test Fetch Error"))

    await renderLoaded()

    // shows error message
    expect(screen.getByText("Test Fetch Error")).toBeInTheDocument()
  })

  it("is accessiable", async () => {
    fetchMock.mockResponseOnce(mockSuccessResponse)

    const { container } = await renderLoaded()

    await validateA11y(container)
  })
})
