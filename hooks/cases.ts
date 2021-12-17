import { useQuery } from "react-query"
import mockCaseData from "../__mocks__/mockCaseData.json"

const CASE = "case"
const CASES = "cases"

const mockCasesQuery = () => {
  return Promise.resolve(mockCaseData.data)
}

const mockCaseQuery = (caseId: number) => {
  const thisCase = mockCaseData.data.cases.filter(
    (c) => c.case_id === caseId
  )[0]

  return Promise.resolve(thisCase)
}

function useCases() {
  const result = useQuery({
    queryKey: CASES,
    queryFn: mockCasesQuery,
  })
  return result
}

function useCase(caseId: number) {
  const result = useQuery({
    queryKey: `${CASE}-${caseId}`,
    queryFn: () => mockCaseQuery(caseId),
  })
  return result
}

export { useCases, useCase }
