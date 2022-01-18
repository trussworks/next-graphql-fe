# FE-007 Frontend Integration and E2E Testing Tool is Playwright

**Status:** Accepted

**Drivers:** Patrick Dickey

**Deciders:** Sandy Wright, Lindsay Techel, Shimona Carvalho

**Decision Date:** 11/10/2021

## Context

Unit tests provide confidence in individual components. While this is important, it does not give us confidence that our components will interact with one another correctly. To gain this confidence, we need **integration and end-to-end tests**. Integration tests typically validate a small set of related/interacting components, while end-to-end testing validates the full application user flow (all components working together).

The [Next.js documentation](https://nextjs.org/docs/testing) provides two recommendations for integration and end-to-end testing, [Cypress](https://www.cypress.io/) and [Playwright](https://playwright.dev/). These will be the primary testing tools considered and either could reasonably support our integration and end-to-end testing needs on this project, they both provide:

- Open-source, JavaScript-based automation frameworks (testing tools)
- Single API for testing in several browsers (both support Firefox and Chromium)
- Headless running for CI/CD
- Functionality like screenshots, mocking, video record, and custom view-ports.
- Neither supports testing in IE11
- Frequently updated GitHub Repos

## Decision

**Try Playwright** as integration and end-to-end testing tool. I honestly starting this ADR thinking Cypress was the tool of choice and what would end up being chosen. After doing some digging, it quickly became clear that Playwright is emerging as a better option. In addition to its laundry list of features/improvements over Cypress, the usage of javascript syntax/patterns seem to make its usage quite natural. To be quite honest I couldn't find a strong argument to use Cypress other than no-one on the team has used Playwright before.

## Consequences

The main impact of this is the way in which developers write, run, and debug integration and end-to-end tests.

## Options Considered

### [Cypress](https://www.cypress.io/) - 34.5k GitHub Stars

- `+` Large, friendly community
- `+` Good documentation
- `+` Easy debugging
- `+` Simple setup
- `+` Team familiarity with tool
- `-` Less browser support than Playwright (no safari)
- `-` Large number of dependencies
- `-` Usually end up needing to use many third-party plugins for features not supported natively, additional dependencies
- `-` Slow test execution
- `-` No multiple browser, window, or tab support
- `-` JQuery-based API feels outdated

### [Playwright](https://playwright.dev/) - 30.3k Github Stars

- `+` Broader browser support
- `+` Lets you choose your test runner
- `+` Simple setup with built in TypeScript support
- `+` Faster test execution than Cypress
- `+` Very few dependencies
- `+` Supports parallel execution, allows multiple tests, browsers, windows, and tabs simultaneously
- `+` Uses common JavaScript terminology/patterns (async await)
- `+` Automatic `awaits`, no retry/timeout pattern
- `+` Great IDE integrations as well as debugging and developer tools
- `+` File upload/download support w/out additional packages
- `+` No cross-origin restriction issues (common w/ cypress)
- `+` More stable than Cypress
- `-` Newer with evolving APIs
- `-` Smaller community
- `-` Still few integrations and tutorials
- `-` Documentation not as good as Cypress.
- `-` No support for IE11
- `-` No team familiarity

## Resources

- [Playwright vs Cypress](https://medium.com/sparebank1-digital/playwright-vs-cypress-1e127d9157bd)
- [Is Playwright better than Cypress? Playwright vs Cypress](https://medium.com/geekculture/is-playwright-better-than-cypress-playwright-vs-cypress-151bd65a224f)
- [Puppeteer, Selenium, Playwright, Cypress - how to choose?](https://www.testim.io/blog/puppeteer-selenium-playwright-cypress-how-to-choose/)
- [Getting started with Playwright with Jest and TypeScript](https://www.carlrippon.com/getting-started-with-playwright/)
- [What is the Microsoft Playwright JS Automation (2021 Tutorial)](https://testguild.com/what-is-microsoft-playwright-js/)
- [https://frontend-digest.com/using-playwright-to-test-next-js-applications-80a767540091](https://frontend-digest.com/using-playwright-to-test-next-js-applications-80a767540091)
