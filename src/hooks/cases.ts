import { useQuery } from "react-query"
import { graphClient } from "../utils/graph-client"
import mockCaseData from "../__mocks__/mockCaseData.json"

const CASE = "case"
const CASES = "cases"

const QUERY_CASES = `query {
  allCases: allCases {
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

const mockCasesQuery = () => {
  return Promise.resolve(mockCaseData.data)
}

const mockCaseQuery = (caseId?: string | string[]) => {
  if (!caseId) return Promise.reject("No case id provided")

  const thisCase = mockCaseData.data.allCases.filter((c) => c.id === caseId)[0]

  return Promise.resolve(thisCase)
}

function useCases() {
  const result = useQuery({
    queryKey: CASES,
    queryFn: () => graphClient(QUERY_CASES),
  })
  return result
}

function useCase(caseId?: string | string[]) {
  const result = useQuery({
    queryKey: `${CASE}-${caseId}`,
    queryFn: () => mockCaseQuery(caseId),
  })
  return result
}

export { useCases, useCase }
