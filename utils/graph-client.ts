let apiURL = process.env.NEXT_PUBLIC_API_URL

async function graphClient(query: string) {
  if (!apiURL) {
    if (process.env.NODE_ENV === "test") {
      // api url not necessary for unit testing
      apiURL = ""
    } else {
      throw new Error("NEXT_PUBLIC_API_URL env variable not found!")
    }
  }

  const fullConfig = {
    method: "POST",
    body: JSON.stringify({ query: query }),
    headers: {
      "Content-Type": "application/json",
    },
  }
  return fetch(apiURL, fullConfig)
    .then(async (response) => {
      const responseData = await response.json()
      if (response.ok) {
        return responseData.data
      } else {
        return Promise.reject(responseData)
      }
    })
    .catch((error) => {
      return Promise.reject(error)
    })
}

export { graphClient }
