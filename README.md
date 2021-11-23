This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

### Docker

This application is containerized using [Docker](https://www.docker.com), you should download and install Docker first. For help, see [the docker docs](https://docs.docker.com/desktop/mac/install/).

Do not move on until you can successfully run both `docker -v` and `docker-compose -v`.

### Running

Build and start the docker container

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Testing

### Unit Testing

Unit tests are written using [Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/). The can be run using:

```bash
yarn unit
```

### End-to-End Testing

End-to-end tests utilize [Playwright](https://playwright.dev/) and should follow the [Page Object Model](https://playwright.dev/docs/pom/) pattern.

The core of this pattern is to create a class for each page in the application to be tested. This class can then be used to abstract away redundant functionality (like page element selections) and perform common page actions. This provides a friendly API to utilize when writing tests and helps encapsulate reusable code to avoid repetition and improve maintainability. For more, see the [Playwright example](https://playwright.dev/docs/test-pom).

To run the End-to-end tests the development server must first be started (`yarn dev`), then the tests can be run with:

```bash
yarn e2e
```

### Run all tests

Unit and end-to-end tests can both be run using:

```bash
yarn test
```

Note: End-to-end tests require the development server to be running.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
