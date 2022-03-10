import React from "react"
import * as routingHooks from "next/router"
import { fireEvent, screen } from "@testing-library/react"
import { renderWithQueryClient as render, validateA11y } from "utils/test-utils"
import LoginPage from "pages/login"
import * as userHooks from "hooks/user"

const mockRoutingPush = jest.fn()
jest.mock("next/router", () => ({
  useRouter() {
    return {
      route: "/login",
      pathname: "/login",
      query: {},
      asPath: "/login",
      push: mockRoutingPush,
    }
  },
}))

beforeEach(() => {
  mockRoutingPush.mockClear()
})

describe("Login Page", () => {
  it("displays page content", () => {
    render(<LoginPage />)

    expect(screen.getByTestId("form")).toBeInTheDocument()

    expect(screen.getAllByText(/sign in/i)[0]).toBeInTheDocument()
    expect(screen.getByText(/access your account./i)).toBeInTheDocument()

    const labels = screen.getAllByTestId("label")
    expect(labels[0].textContent).toMatchInlineSnapshot(`"Email address"`)
    expect(labels[1].textContent).toMatchInlineSnapshot(`"Password"`)

    const inputs = screen.getAllByTestId("textInput")
    expect(inputs[0].getAttribute("name")).toMatchInlineSnapshot(`"username"`)
    expect(inputs[0].getAttribute("type")).toMatchInlineSnapshot(`"text"`)
    expect(inputs[1].getAttribute("name")).toMatchInlineSnapshot(`"password"`)
    expect(inputs[1].getAttribute("type")).toMatchInlineSnapshot(`"password"`)

    const showPw = screen.getByTitle(/show password/i)
    expect(showPw).toBeInTheDocument()
    expect(showPw.textContent).toMatchInlineSnapshot(`"Show password"`)

    expect(screen.getAllByText(/sign in/i)[1]).toBeInTheDocument()

    const forgotPw = screen.getByTitle(/forgot password/i)
    expect(forgotPw).toBeInTheDocument()
    expect(forgotPw.textContent).toMatchInlineSnapshot(`"Forgot password?"`)
  })

  it("submits login form correctly", () => {
    //Mock the user hook to verify the user is updated on submit
    const mockSetUser = jest.fn()
    jest.spyOn(userHooks, "useUser").mockImplementation(() => {
      return { user: "mockUser", setUser: mockSetUser }
    })

    render(<LoginPage />)

    // Fill in form
    const form = screen.getByTestId("form")
    fireEvent.change(form, {
      target: { username: { value: "Test@user" } },
    })
    fireEvent.change(form, {
      target: { password: { value: "test-password" } },
    })

    // Nothing should have happened yet
    expect(mockSetUser).toHaveBeenCalledTimes(0)
    expect(mockRoutingPush).toHaveBeenCalledTimes(0)

    // Submit form
    fireEvent.click(screen.getByRole("button"))

    // Validate expected form submit repercussions
    expect(mockSetUser).toHaveBeenCalledTimes(1)
    expect(mockSetUser).toHaveBeenCalledWith("Test@user")
    expect(mockRoutingPush).toHaveBeenCalledTimes(1)
    expect(mockRoutingPush).toHaveBeenCalledWith({ pathname: "/incidents" })
  })

  it("matches snapshot", () => {
    const { container } = render(<LoginPage />)

    expect(container).toMatchSnapshot()
  })

  it("is accessible", async () => {
    const { container } = render(<LoginPage />)

    await validateA11y(container)
  })
})
