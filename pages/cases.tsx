import React from "react"
import type { NextPage } from "next"
import { useRouter } from "next/router"
import { Table, Tag } from "@trussworks/react-uswds"

import { useCases } from "../hooks/cases"
import { ColorTag } from "../components/ColorTag"
import { TagColorsEnum } from "../types/enums"
import styles from "styles/Cases.module.scss"

const TodoTag = () => (
  <Tag style={{ color: "#000", backgroundColor: "#E1F3F8" }}>To do</Tag>
)

const CasesPage: NextPage = () => {
  const router = useRouter()
  const { data } = useCases()

  return (
    <main className={styles.main}>
      <h1>All Alerts</h1>
      <p role="paragraph">
        View of all alerts that are active in the system today.
      </p>

      {data ? (
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
            {data.cases.map((c) => (
              <tr
                className={styles.row}
                key={c.case_id}
                onClick={() => {
                  router.push(`/case/${c.case_id}`)
                }}
              >
                <td>
                  <ColorTag color={c.color_code as TagColorsEnum} />
                </td>
                <th scope="row">
                  {c.person.first_name} {c.person.last_name}
                </th>
                <td>{c.date_received}</td>
                <td>{c.status}</td>
                <td>
                  {c.int_analyst ? c.int_analyst.first_name : <TodoTag />}
                </td>
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
