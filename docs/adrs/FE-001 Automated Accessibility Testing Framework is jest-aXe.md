# FE-001 Automated Accessibility Testing Framework is jest-aXe

**Status:** Accepted

**Drivers:** Patrick Dickey

**Deciders:** Sandy Wright, Lindsay Techel, Shimona Carvalho

**Decision Date:** 11/1/2021

## Context

Website accessibility (a11y) is the practice of making a website usable by as many people as possible, including those with disabilities. Automated accessibility testing tools can be used to identify a11y issues and help ensure a website complies with [common accessibility standards](https://www.w3.org/WAI/standards-guidelines/wcag/glance/).

A11y testing tools typically have some form of a browser/UI component and a CLI component. The browser based aspects provide on-screen a11y related feedback. This is great for development and manual verification but cannot be integrated with the build process to provide enforcement that ongoing changes to the codebase still meet a11y standards. This ADR is limited in scope to focus on tools that can be integrated into the build process. Browser based tools and extensions should also be utilized (in addition to the decided option) during development and ongoing testing/validation.

Note that [no a11y testing tool can completely guarantee](https://accessibility.blog.gov.uk/2017/02/24/what-we-found-when-we-tested-tools-on-the-worlds-least-accessible-webpage/) a website will be usable for all users. Therefore, in addition to the considered tools, testing with real users and assistive technology is necessary.

## Decision

Use **jest-aXe** for automated accessibility testing. With all considered tools essentially being wrappers around the same engine, jest-aXe provides the best API with almost no learning curve.

## Consequences

The considered tools all use the same [axe-core](https://www.deque.com/axe/) engine for the actual a11y validation. This means that choosing one tool over another really only impacts how we interface with this core engine.

## Options Considered

### [pa11y-ci](https://github.com/pa11y/pa11y-ci)

Tool to scan website pages for a11y issues

- `+` Extremely configurable
- `+` Allows testing for compliance with common a11y standards
- `+` Allows ‘actions’ to be performed within a test to interact with the page being tested
- `+` FE framework independent, inspects HTML at provided URL
- `-` URL/Page based, not component based
- `-` Requires config work to define 'actions' to take on each page that requires user interaction to display all content (e.g. opening models, selecting checkboxes, ect)

### [jest-aXe](https://github.com/nickcolley/jest-axe)

- `+` Test and interact at the component level
- `+` Low overhead and easy to use, can add a11y assertions to new or existing jest/enzyme/react-testing-library tests
- `+` No need for config overhead to setup 'actions'
- `+` No special CI setup to pass/fail
- `-` A11y ‘tests’ are simply assert statements within unit tests, which can cause the line between a11y tests and unit tests to become blurred.
- `-` Only useful in projects using [Jest](https://jestjs.io/) for unit testing (jest supports unit testing most FE frameworks including React, Angular, Vue, Node, and Svelte)

### [lighthouse-ci](https://github.com/GoogleChrome/lighthouse-ci)

- `+` Comes built into chrome dev tools and can also be run via Node CLI
- `+` Also reports on apps performance, SEO, and best practices in output report
- `+` Developed by google
- `+` FE framework independent
- `-` URL/Page based and does not seem to support much in the way of interaction with the website being tested (opening models, expanding drop-downs, ect)
- `-` Not obvious how you would ensure you were testing for compliance of a specific standard (e.g. WCAG A, AA, ect)
- `-` CI aspects seem non-trivial and config heavy

### No CI tool, manual/browser test for a11y compliance

- `+` No additional packages/tools needed
- `-` No build integration or a11y enforcement

## Resources

- [W3C Accessibility Standards Overview](https://www.w3.org/WAI/standards-guidelines/)
- [Pa11y homepage](https://pa11y.org/)
- [How to use Pa11y via command line](https://webdesign.tutsplus.com/tutorials/web-accessibility-testing-via-the-command-line-with-pa11y--cms-34538)
- [Brief jest-aXe article](https://maxrozen.com/automatic-a11y-testing-with-jest-axe)
- [Usage examples of jest-aXe](https://www.tabnine.com/code/javascript/modules/jest-axe)
- [Lighthouse google dev page](https://developers.google.com/web/tools/lighthouse)
