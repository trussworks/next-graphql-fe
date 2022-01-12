import React from "react"
import type { NextPage } from "next"
import { useRouter } from "next/router"
import {
  Button,
  Fieldset,
  Form,
  Label,
  TextInput,
} from "@trussworks/react-uswds"

import { useUser } from "../hooks/user"
import styles from "styles/login.module.scss"

const LoginPage: NextPage = () => {
  const router = useRouter()
  const { setUser } = useUser()

  const [showPassword, setShowPassword] = React.useState(false)

  return (
    <main className={styles.main}>
      <Form
        large
        onSubmit={(e) => {
          e.preventDefault()

          const target = e.target as typeof e.target & {
            username: { value: string }
            password: { value: string }
          }
          const username = target.username.value
          const password = target.password.value

          setUser(username)

          router.push({ pathname: "/cases" })
        }}
        className={styles.form}
      >
        <Fieldset legend="Sign In" legendStyle="large">
          <span data-testid="sign-in-title">Access your account.</span>
          <Label htmlFor="username">Email address</Label>
          <TextInput
            id="username"
            name="username"
            type="text"
            autoCapitalize="off"
            autoCorrect="off"
          />
          <Label htmlFor="password">Password</Label>
          <TextInput
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
          />
          <p className="usa-form__note">
            <a
              title="Show password"
              href="#"
              className="usa-show-password"
              aria-controls="password"
              onClick={(): void =>
                setShowPassword((showPassword) => !showPassword)
              }
            >
              {showPassword ? "Hide password" : "Show password"}
            </a>
          </p>

          <Button type="submit">Sign in</Button>

          <p>
            <a href="#" title="Forgot password">
              Forgot password?
            </a>
          </p>
        </Fieldset>
      </Form>
    </main>
  )
}

export default LoginPage
