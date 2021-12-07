const apiURL = process.env.NEXT_PUBLIC_API_URL

async function graphClient(query: string) {
  if (!apiURL) {
    throw new Error("NEXT_PUBLIC_API_URL env variable not found!")
  }

  const fullConfig = {
    method: "POST",
    body: JSON.stringify({ query: query }),
    headers: {
      "Content-Type": "application/json",
    },
  }

  return window.fetch(apiURL, fullConfig).then(async (response) => {
    const responseData = await response.json()
    if (response.ok) {
      return responseData.data
    } else {
      return Promise.reject(responseData)
    }
  })
}

export { graphClient }
