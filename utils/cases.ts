import { useQuery } from "react-query"
import a from "./mockCaseData.json"

const CASE = "case"
const CASES = "cases"

const mockCasesQuery = () => {
  return Promise.resolve(a.data)
}

const mockCaseQuery = (caseId: number) => {
  const thisCase = a.data.cases.filter((c) => c.case_id === caseId)[0]

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
