# Unit Testing

[React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) (RTL) with Jest as the test runner/framework [was selected](https://github.com/trussworks/next-graphql-fe/blob/main/docs/adrs/FE-005%20Frontend%20Unit%20Testing%20Library%20is%20React%20Testing%20Library.md) for unit testing. Unit tests can be run with `yarn unit` or can be run in interactive/watch mode with `yarn unit:watch`.

## Writing Tests with React Testing Library

The typical unit test includes 4 sections:

1.  **Test Setup -** Mock out dependencies for components being tested. It is common to mock out things like data responses or user/role information to get tests into specific states to be tested. Be sure to mock out and test error scenarios, as well as success scenarios.
2.  **Render Component -** Use [RTL to render](https://testing-library.com/docs/react-testing-library/api#render) the component that will be tested. The RTL render returns [an object](https://testing-library.com/docs/react-testing-library/api#render-result) with many useful items, including a ‘container’ which is the DOM node of the rendered element.
3.  **Assert and Interact -** Use [RTL queries](https://testing-library.com/docs/queries/about) to select elements from rendered component. Make assertions about the selected elements and/or interact with them (type, click, ect). See below for more on RTL queries.
4.  **Cleanup** - Reset anything you may have mocked/changed that can affect other tests. Note: We have Jest configured so that Jest mocks and timers are reset before each test, so no need to reset those.

## React Testing Library Queries

Three sections make up a RTL selection query: a query type (get vs query vs find), single or multiple (all keyword), and how to select (role, text, title, testId, ect). See [About Queries | Testing Library](https://testing-library.com/docs/queries/about)

Determining which query type to use (`get`, `query`, or `find`) is consequential and often a pain point. It can help to frame them in terms of how they would help you ask someone to do a favor:

- `get`: “**Go get it,** it should be there”. Get element that should be in the render right now, throws an error if a match is not found.
- `query`: “**Query: is it here?** It's ok if not”. Commonly used to assert that something is **not** present.
- `find`: “**Go try to find it**”. This one is async, always ‘await’ when using `find`. This is used whenever you want to select something that may not be on the page immediately (either initially or after an interaction). Find waits for a (configurable) timeout to select an element.

For a quick RTL reference, see: [Cheatsheet | Testing Library](https://testing-library.com/docs/react-testing-library/cheatsheet). Typical selection queries end up looking something like: `queryByRole`, `findAllByText`, or `getByTitle`.

## Debugging Unit Tests

Any Jest debugger can be attached to allow adding breakpoints and stepping through tests ([example with VS code built-in debugger](https://jestjs.io/docs/troubleshooting#debugging-in-vs-code)).

Without attaching a debugger (or in addition too), React testing library comes with several nice features to help out, see: [Debugging | Testing Library](https://testing-library.com/docs/dom-testing-library/api-debugging/). The most useful parts being: 1) the state of the DOM under test gets print to console on error with clear messaging and 2) you can print out the the current rendered component at any point in a test using `screen.debug()`.
