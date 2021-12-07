import { useQuery } from "react-query"
import { graphClient } from "utils/graph-client"

const HELLO = "hello"
const QUERY_HELLO = `query {hello}`

function useHello() {
  const result = useQuery({
    queryKey: HELLO,
    queryFn: () => graphClient(QUERY_HELLO),
  })

  return result
}

export { useHello }
