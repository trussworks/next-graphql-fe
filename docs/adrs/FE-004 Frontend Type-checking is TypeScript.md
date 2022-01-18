# FE-004 Frontend Type-checking is TypeScript

**Status:** Accepted

**Drivers:** Patrick Dickey

**Deciders:** Sandy Wright, Lindsay Techel, Shimona Carvalho

**Decision Date:** 11/9/2021

## Context

Type-checking allows engineers to validate types of values/operands within an application. This provides a number of benefits including a reduction in bugs (bugs caught earlier) and more understandable, maintainable code. It also generally allows for better auto-complete and snippet generation during development. The options being considered in this decision are: [TypeScript](https://www.typescriptlang.org/), [PropTypes](https://reactjs.org/docs/typechecking-with-proptypes.html), or not to type-check. The core difference between TypeScript and PropTypes is Typescript provides type checking at compile-time, whereas PropTypes validate at run-time.

## Decision

Use **TypeScript**. The advantages to engineers of a tighter integration with code editors and ability to catch type errors early more than make up for the development overhead of adding typing. PropTypes are not a bad option but do not provide the significant ‘during development’ benefits of TypeScript and PropTypes can be generated from TypeScript if need be.

## Consequences

The most significant consequence of this decision is the overhead of learning the chosen typing syntax and adding typing to components as a part of development.

## Options Considered

### [TypeScript](https://www.typescriptlang.org/)

A strongly typed programming language that builds on JavaScript. It is a superset of JavaScript to provide static type-checking and gets compiled into readable JavaScript.

- `+` Strong static typing system will help reduce possibility of bugs at runtime, since type errors are captured at compile time
- `+` Code is clearer and easier to understand with [static typing](https://www.typescriptlang.org/docs/handbook/basic-types.html) and [interfaces](https://www.typescriptlang.org/docs/handbook/interfaces.html)
- `+` Requires minimal to no additional setup when used with common boilerplates such as [create-react-app](https://github.com/facebook/create-react-app) or [create-next-app](https://nextjs.org/docs/api-reference/create-next-app)
- `+` Enables many helpful autocomplete and snippet generation features that help make development faster
- `+` Documentation and community support are well-established
- `+` Readily available linting, semantic highlighting, and code editor integrations
- `+` Conditional type-checking
- `+` Can generate PropTypes for run-time validation from TypeScript
- `-` Adds a layer of complexity
- `-` Learning overhead
- `-` Does not catch run-time type errors

### [PropTypes](https://reactjs.org/docs/typechecking-with-proptypes.html)

- `+` No need to developers to learn a new language
- `+` No TypeScript dependency
- `+` Can catch type errors when interacting with external data or user input since validation is at run-time
- `+` Compile-time build failures can be frustrating
- `-` Less code editor, linting, semantic highlighting integration than TypeScript
- `-` Usage feels a bit like an after thought
- `-` Custom linting and reporting may implement framework/tool-specific validation inconsistently and idiosyncratically

### No Type-checking (JavaScript)

- `+` No learning overhead
- `+` Heavier usage and community support than TypeScript
- `-` No static type checking

## Resources

- [Comparing TypeScript and PropTypes in React Applications](https://blog.logrocket.com/comparing-typescript-and-proptypes-in-react-applications/)
- [PropTypes in React and TypeScript](https://amanhimself.dev/blog/prop-types-in-react-and-typescript/)
- [TypeScript vs JavaScript: What's the difference?](https://www.guru99.com/typescript-vs-javascript.html)
- [React TypeScript Documentation](https://reactjs.org/docs/static-type-checking.html#typescript)
- [Truss TypeScript ADR](https://github.com/trussworks/Engineering-Playbook/blob/ae880de7665590843296b8cb86ad0942c8c4e986/practices/appeng/adrs/0001-use-typescript.md)
