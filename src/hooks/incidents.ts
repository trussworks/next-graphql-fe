import { useQuery } from "react-query"
import { graphClient } from "utils/graph-client"
import mockIncidentData from "__mocks__/mockIncidentData.json"

const INCIDENT = "incident"
const INCIDENTS = "incidents"

const QUERY_INCIDENTS = `query {
  allIncidents: allIncidents {
    id
    colorCode
    receivedAt
    subject {
      id
      firstName
      lastName
    }
    status
    analyst {
      firstName
      lastName
    }
  }
}
`

const mockIncidentsQuery = () => {
  return Promise.resolve(mockIncidentData.data)
}

const mockIncidentQuery = (incidentId?: string | string[]) => {
  if (!incidentId) return Promise.reject("No incident id provided")

  const thisIncident = mockIncidentData.data.allIncidents.filter((i) => i.id === incidentId)[0]

  return Promise.resolve(thisIncident)
}

function useIncidents() {
  const result = useQuery({
    queryKey: INCIDENTS,
    queryFn: () => graphClient(QUERY_INCIDENTS),
  })
  return result
}

function useIncident(incidentId?: string | string[]) {
  const result = useQuery({
    queryKey: `${INCIDENT}-${incidentId}`,
    queryFn: () => mockIncidentQuery(incidentId),
  })
  return result
}

export { useIncidents, useIncident }
