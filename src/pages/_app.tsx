import { useState } from "react"
import "styles/index.scss"
import Head from "next/head"
import type { AppProps } from "next/app"
import { QueryClient, QueryClientProvider } from "react-query"
import { ReactQueryDevtools } from "react-query/devtools"

import { UserProvider } from "hooks/user"
import { Header } from "components/Header/Header"

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: { staleTime: 1000 * 60 },
        },
      })
  )

  return (
    <UserProvider>
      <QueryClientProvider client={queryClient}>
        <div>
          <Head>
            <title>Next Front-End</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <Header />

          <Component {...pageProps} />
        </div>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </UserProvider>
  )
}

export default MyApp
