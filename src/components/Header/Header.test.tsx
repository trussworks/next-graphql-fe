import React from "react"
import { renderWithQueryClient as render, validateA11y } from "utils/test-utils"
import { Header } from "components/Header/Header"
import * as hooks from "hooks/user"

describe("Header", () => {
  it("renders correctly without a user", () => {
    const { getByText, queryByText, getByAltText } = render(<Header />)

    expect(getByAltText(/next finder/i)).toBeInTheDocument()

    expect(queryByText(/sign out/i)).not.toBeInTheDocument()
    expect(getByText(/sign in/i)).toBeInTheDocument()
  })

  it("renders correctly with a user", () => {
    jest.spyOn(hooks, "useUser").mockImplementation(() => {
      return { user: "Test User", setUser: jest.fn() }
    })

    const { getByText, queryByText, getByAltText } = render(<Header />)

    expect(getByAltText(/next finder/i)).toBeInTheDocument()

    expect(getByText(/test user/i)).toBeInTheDocument()
    expect(getByText(/sign out/i)).toBeInTheDocument()
    expect(queryByText(/sign in/i)).not.toBeInTheDocument()
  })

  it("matches snapshot without user", () => {
    const { container } = render(<Header />)

    expect(container).toMatchSnapshot()
  })

  it("matches snapshot with user", () => {
    jest.spyOn(hooks, "useUser").mockImplementation(() => {
      return { user: "Test User", setUser: jest.fn() }
    })

    const { container } = render(<Header />)

    expect(container).toMatchSnapshot()
  })

  it("is accessiable", async () => {
    const { container } = render(<Header />)

    await validateA11y(container)
  })
})
