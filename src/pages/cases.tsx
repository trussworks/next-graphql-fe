import React from "react"
import type { NextPage } from "next"
import { useRouter } from "next/router"
import { Table, Tag } from "@trussworks/react-uswds"

import { useIncidents } from "hooks/incidents"
import { ColorTag } from "components/ColorTag/ColorTag"
import { TagColorsEnum } from "types/enums"
import styles from "styles/incidents.module.scss"
import { Incident } from "types/types"

const isError = (error: unknown): error is Error => error instanceof Error

const TodoTag = () => <Tag className={styles.todo}>To do</Tag>

const CasesPage: NextPage = () => {
  const router = useRouter()
  const { data, error } = useIncidents()
  return (
    <main className={styles.incidents}>
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
              <th scope="col">Status</th>
              <th scope="col">InT Analyst Assigned</th>
            </tr>
          </thead>
          <tbody>
            {data.allIncidents.map((i: Incident) => (
              <tr
                className={styles.row}
                key={i.id}
                onClick={() => {
                  router.push(`/incidents/${i.id}`)
                }}
              >
                <td>
                  <ColorTag color={i.colorCode as TagColorsEnum} />
                </td>
                <th scope="row">
                  {i.subject.firstName} {i.subject.lastName}
                </th>
                <td>{new Date(i.receivedAt).toLocaleDateString()}</td>
                <td>{i.status}</td>
                <td>{i.analyst ? i.analyst.firstName : <TodoTag />}</td>
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
