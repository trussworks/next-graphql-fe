import React from "react"
import type { NextPage } from "next"
import { useRouter } from "next/router"
import Link from "next/link"
import { BreadcrumbBar, Breadcrumb } from "@trussworks/react-uswds"

import styles from "styles/incident.module.scss"
import { useIncident } from "hooks/incidents"

const IncidentPage: NextPage = () => {
  const router = useRouter()
  const { id } = router.query

  const { data } = useIncident(id)

  return (
    <main className={styles.incident}>
      <header>
        <BreadcrumbBar className={styles.breadcrumbs}>
          <Breadcrumb>
            <Link href="/incidents">Home</Link>
          </Breadcrumb>
          <Breadcrumb current>
            <span className={styles.name}>
              {data ? `${data.subject.firstName} ${data.subject.lastName}` : ""}
            </span>
          </Breadcrumb>
        </BreadcrumbBar>

        <h1 className={styles.name}>
          {data
            ? `${data.subject.firstName} ${data.subject.lastName}`
            : "loading..."}
        </h1>
      </header>
    </main>
  )
}

export default IncidentPage
