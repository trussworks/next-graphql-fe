import React from "react"
import type { NextPage } from "next"
import { useRouter } from "next/router"
import { Table, Tag } from "@trussworks/react-uswds"

import { useCases } from "../hooks/cases"
import { ColorTag } from "../components/ColorTag/ColorTag"
import { TagColorsEnum } from "../types/enums"
import styles from "styles/cases.module.scss"
import { Case } from "types/types"

const isError = (error: unknown): error is Error => error instanceof Error

const TodoTag = () => (
  <Tag className={styles.todo}>To do</Tag>
)

const CasesPage: NextPage = () => {
  const router = useRouter()
  const { data, error } = useCases()
  return (
    <main className={styles.main}>
      <h1>All Alerts</h1>
      <p role="paragraph">
        View of all alerts that are active in the system today.
      </p>

      {isError(error) ? (
        error.message
      ) : data ? (
        <Table bordered={false} fullWidth>
          <thead>
            <tr>
              <th scope="col">Color Code</th>
              <th scope="col">Name</th>
              <th scope="col">Date received</th>
              <th scope="col">Case status</th>
              <th scope="col">InT Analyst Assigned</th>
            </tr>
          </thead>
          <tbody>
            {data.allCases.map((c: Case) => (
              <tr
                className={styles.row}
                key={c.id}
                onClick={() => {
                  router.push(`/case/${c.id}`)
                }}
              >
                <td>
                  <ColorTag color={c.colorCode as TagColorsEnum} />
                </td>
                <th scope="row">
                  {c.subject.firstName} {c.subject.lastName}
                </th>
                <td>{new Date(c.receivedAt).toLocaleDateString()}</td>
                <td>{c.status}</td>
                <td>{c.analyst ? c.analyst.firstName : <TodoTag />}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        "loading..."
      )}
    </main>
  )
}

export default CasesPage
