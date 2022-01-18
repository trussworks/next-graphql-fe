# FE-009 Data Fetching Library is React Query

**Status:** Accepted

**Drivers:** Patrick Dickey

**Deciders:** Sandy Wright, Lindsay Techel, Shimona Carvalho

**Decision Date:** 12/7/2021

## Context

We need a mechanism in the React frontend to handle data fetching and updating from our backend GraphQL API. The most popular options for this include a host of other features intended to work in conjunction with data fetching and updating (caching, parallelization, prefetching, ect). With all these features and an emphasis on caching, modern ‘fetching libraries’ have grown into what could be considered ‘data management libraries’.

This ADR is focused on the two most popular options: React Query and Apollo Client. Both options come with a rich set of features and have a significant number of commonalities. They both have Typescript support, use React hooks, and have very active community and maintainers. Functionality wise, they both provide mechanisms for optimistic cache updates, prefetching, pagination, and [more](https://react-query.tanstack.com/comparison). Overall they are very full featured and the decision mostly will be dependent on our use case.

## Decision

Use **React Query**. The decision here really comes down to the key distinction between Apollo and React Query: Apollo is specifically for GraphQL, whereas React Query is agnostic. If we could say with confidence that we will only be consuming data from GraphQL, then Apollo would be the appropriate choice. However, it seems very likely we will consume data from external endpoints not guaranteed to be using GraphQL and we don't want to be using multiple fetching/caching mechanisms.

In short, React Query gives us flexibility. Apollo client gives us GraphQL optimizations. Based on our limited understanding of what we are to build, flexibility is of higher value.

## Consequences

This is one of the more significant decisions. This impacts how we will fetch, cache, and update data from the frontend. This comes with it a substantial amount of other possible functionality and customization including things like optimistic cache updating, cache invalidation, re-fetching, and prefetching/SSR. The chosen option locks us into not only how each of these is configured/implemented in our codebase but also which are possible (without additional packages).

## Options Considered

### [React Query](https://react-query.tanstack.com/) - [24k Github Stars]

“Performant and powerful data synchronization for React. Fetch, cache, and update data in your React applications all without touching any 'global state'.”

- `+` Agnostic, can be used for more than GraphQL based servers (Promise, REST, GraphQL)
- `+` Caching mechanism is easy to reason about and use
- `+` (experimental) support for React Suspense
- `-` No normalized data caching
- `-` Less powerful SSR functionality than Apollo (though all functionality still present)

### [Apollo Client](https://www.apollographql.com/apollo-client) - [17k Github Stars]

”A comprehensive state management library for JavaScript that enables you to manage both local and remote data with GraphQL. Use it to fetch, cache, and modify application data, all while automatically updating your UI.

- `+` Very full featured and specifically for GraphQL
- `+` [Normalized data caching](https://www.apollographql.com/docs/kotlin/v2/essentials/normalized-cache/)
- `+` First class support for SSR
- `-` Only for GraphQL
- `-` Significant number of outstanding issues in repo (428 at time of writing)

### No Data Fetching Library

- `+` No external package(s) required
- `-` Need to manage and solve tricky issues around data fetching that are already worked out libraries like React Query or Apollo client.

## Note

Something mentioned throughout this ADR that is worth understanding is `normalized data caching`. In plain terms, this means that if multiple queries return the same item, it will be stored/cached only once. This allows for optimizations around what is fetched in future queries/updates. I find the visual about half way down the page [here](https://www.apollographql.com/apollo-client) to be pretty helpful.

## Resources

- [Comparison | React Query vs SWR vs Apollo vs RTK Query](https://react-query.tanstack.com/comparison)
- [apollo-client vs react-query vs swr vs urql | npm trends](https://www.npmtrends.com/apollo-client-vs-react-query-vs-swr-vs-urql)
- [Patterns and Tips around migrating from Apollo to React Query · Discussion #301 · tannerlinsley/react-query](https://github.com/tannerlinsley/react-query/discussions/301)
- [Why I (finally) switched to urql from Apollo Client - LogRocket Blog](https://blog.logrocket.com/why-i-finally-switched-to-urql-from-apollo-client/)
- [GraphQL](https://react-query.tanstack.com/graphql)
- [SSR](https://react-query.tanstack.com/guides/ssr#using-nextjs)
- [How to use React Query with React and GraphQL](https://www.takeshape.io/articles/how-to-use-react-query-with-react-and-graphql/)
- [Demystifying Cache Normalization](https://www.apollographql.com/blog/apollo-client/caching/demystifying-cache-normalization/)
- [https://blog.bitsrc.io/how-to-start-using-react-query-4869e3d5680d](https://blog.bitsrc.io/how-to-start-using-react-query-4869e3d5680d)
- [Why You Should Use React Query or SWR - This Dot Labs](https://www.thisdot.co/blog/why-you-should-use-react-query-or-swr)
- [The next big thing! React Query for server-state data management](https://tsh.io/blog/react-query-tutorial/)
