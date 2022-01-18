# FE-005 Frontend Unit Testing Library is React Testing Library

**Status:** Accepted

**Drivers:** Patrick Dickey

**Deciders:** Sandy Wright, Lindsay Techel, Shimona Carvalho

**Decision Date:** 11/9/2021

## Context

Unit tests provide confidence in React components. There are numerous options for tools, frameworks, and libraries to support unit testing. This ADR will focus on the two leading options with wide adoption, Enzyme and React Testing Library (RTL). Both considered options will utilize [Jest](https://jestjs.io/) as the testing framework. Jest is the React communities recommended testing framework. Enzyme and RTL are libraries that work with Jest to provide different flavors of unit testing for React components. In the past, Enzyme was the tool of choice. More recently, RTL has rapidly gained in popularity as a great way to unit test React components from an end user's perspective, which comes with a number of significant benefits.

## Decision

Use **React Testing Library (RTL)**. This one is really a no brainer, Enzyme forces engineers to test implementation details (examine props/state) while RTL tests behavior. Testing behavior allows testing as a user would and encourages accessible code. Implementation details (like what the props or state are over time) potentially change over time and frankly are unimportant to the user, so they should not be tested. What we really care about is behavior that users interact with, which is what RTL tests.

## Options Considered

### [Enzyme](https://enzymejs.github.io/enzyme/)

“A JavaScript Testing utility for React that makes it easier to assert, manipulate, and traverse your React Components’ output”.

- `+` Allows shallow rendering (fast running tests)
- `+` Shallow rendered test come with small preparation cost
- `+` A little more popular (though this is shifting)
- `-` Tests implementation details of components which is an Anti-pattern!
- `-` Shallow rendering does not provide confidence the component being tested works in the outside environment
- `-` Does not have full hook support
- `-` Built on custom ‘react-dom’ so new React features not immediately supported

### [React Testing Library (RTL)](https://testing-library.com/docs/react-testing-library/intro/)

A testing library focused on testing components from the end-user’s experience rather than testing the implementation and logic of the underlying React components.
Words

- `+` Tests behavior not implementation details, testing is done form user’s perspective
- `+` Encourages good testing practices by design
- `+` No complexity around shallow vs deep rendering, test using the DOM
- `+` Built on react-dom and react-dom/test-utils, so new React features are supported out of the box
- `+` Limits element selection capability to drives engineers to meet best practices, especially around accessibility
- `+` Tests are easier and less complex to write
- `-` Less usage than Enzyme
- `-` No shallow rendering

### No unit tests

- `+` No work to do
- `-` No confidence in application/components

## Resources

- [React Testing Library (RTL) vs Enzyme](https://medium.com/xebia-engineering/react-testing-library-rtl-vs-enzyme-14b12b4136ed)
- [RTL vs Enzyme](https://medium.com/wesionary-team/react-testing-library-vs-enzyme-afd29db380ac)
- [React Testing Overview](https://reactjs.org/docs/testing.html#tools)
- [Introducing the react-testing-library](https://kentcdodds.com/blog/introducing-the-react-testing-library)
- [Enzyme Introduction](https://enzymejs.github.io/enzyme/)
- [Shallow Rendering in Enzyme](https://enzymejs.github.io/enzyme/docs/api/shallow.html)
- [Testing Implementation Details](https://kentcdodds.com/blog/testing-implementation-details)
