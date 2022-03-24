import React from "react"
import type { NextPage } from "next"
import Link from "next/link"
import { Button, GovBanner } from "@trussworks/react-uswds"

import { useHello } from "hooks/hello"
import styles from "styles/home.module.scss"

const isError = (error: unknown): error is Error => error instanceof Error

const HelloPage: NextPage = () => {
  const { data, error } = useHello()

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Hello, welcome to the JEDI Project</h1>

        <p className={styles.description}>
          Greetings from the Backend:{" "}
          <code className={styles.code}>
            {data ? data.hello : isError(error) ? error.message : "loading..."}
          </code>
        </p>

        <a href="/incidents" className={styles.card}>
            <h2>Incidents &rarr;</h2>
            <p>All incident entries</p>
        </a>        
      </main>
    </div>
  )
}

export default HelloPage
