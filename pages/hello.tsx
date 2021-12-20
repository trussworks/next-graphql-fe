import React from "react"
import type { NextPage } from "next"
import Head from "next/head"
import Link from "next/link"
import { Button, GovBanner } from "@trussworks/react-uswds"

import { useHello } from "../utils/hello"
import styles from "styles/Home.module.scss"

const isError = (error: unknown): error is Error => error instanceof Error

const HelloPage: NextPage = () => {
  const { data, error } = useHello()

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Hello, welcome to the test page</h1>

        <p className={styles.description}>
          Greeting from the Backend:{" "}
          <code className={styles.code}>
            {data ? data.hello : isError(error) ? error.message : "loading..."}
          </code>
        </p>

        <Button type="button" onClick={() => alert("Hi")}>
          I am a React-USWDS button
        </Button>

        <h2>And here is a banner: </h2>
        <GovBanner />

        <Link href="/">
          <a className={styles.card}>Home</a>
        </Link>
      </main>
    </div>
  )
}

export default HelloPage
