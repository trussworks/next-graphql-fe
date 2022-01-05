import React from "react"
import type { NextPage } from "next"
import { useRouter } from "next/router"
import Link from "next/link"
import { BreadcrumbBar, Breadcrumb } from "@trussworks/react-uswds"

import styles from "styles/Case.module.scss"
import { useCase } from "../../hooks/cases"

const CasesPage: NextPage = () => {
  const router = useRouter()
  const { id } = router.query

  const { data } = useCase(id)

  return (
    <main>
      <section className={styles.section}>
        <BreadcrumbBar className={styles.breadcrumbBar}>
          <Breadcrumb className={styles.link}>
            <Link href="/cases">Home</Link>
          </Breadcrumb>
          <Breadcrumb current>
            <span className={styles.breadcrumbLink}>
              {data ? `${data.subject.firstName} ${data.subject.lastName}` : ""}
            </span>
          </Breadcrumb>
        </BreadcrumbBar>

        <h1 className={styles.h1}>
          {data
            ? `${data.subject.firstName} ${data.subject.lastName}`
            : "loading..."}
        </h1>
      </section>
    </main>
  )
}

export default CasesPage
