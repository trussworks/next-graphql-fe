# FE-008 React Component Library is React USWDS

**Status:** Accepted

**Drivers:** Patrick Dickey

**Deciders:** Sandy Wright, Lindsay Techel, Shimona Carvalho

**Decision Date:** 11/23/2021

## Context

A component library is a set of reusable components that serve as building blocks for creating a user interface. Typical components in a library would include components like buttons, inputs, and breadcrumbs that can be customized and extended. Using a component library allows engineers to hit the ground running and avoid having to build common components from scratch. They usually implement a standard design system and help provide consistency in application look and feel.

## Decision

**Use React USWDS.**

In short, React USWDS was built for exactly our use case: A government project that would benefit from following the [U.S. Web Design System](https://designsystem.digital.gov/) (USWDS) specs. It will provide the project a great starting point with components that implement USWDS design patterns out of the box. We also have access to the source engineers and active maintainers of the repo, which provides us great supporting resources and influence over upcoming features/releases.

## Consequences

The most significant impact (other than this determine which components we use) is it will somewhat lock us into how we will do styling (CSS-in-JS, SASS, CSS modules, ect) as most component libraries are opinionated on how the components should be styled.

## Options Considered

### [React USWDS](https://github.com/trussworks/react-uswds)

“A front-end component library aimed at implementing USWDS design patterns in React.”

- `+` Implements USWDS design patterns
- `+` Truss created/maintained repo
- `+` Team access to source engineers
- `+` Widespread Truss familiarity (both design and eng)
- `+` Strong emphasis on accessibility
- `-` Clunky styling/theming compared to other modern libraries
- `-` Fewer components than some other modern libraries
- `-` 72 GitHub stars

### Other modern/general component library ([Material UI](https://mui.com/), [Semantic UI](https://semantic-ui.com/), [React Bootstrap](https://react-bootstrap.github.io/))

- `+` Broader set of both foundational and advanced components available
- `+` Generally have excellent documentation and usage examples
- `+` Some have clever solutions to global component theming
- `+` There are much more widely used and popular libraries than React USWDS
- `-` Do not implement USWDS design patterns
- `-` Accessibility not the emphasis of all libraries
- `-` Dependency on external library contributors for updates, support, maintenance, ect

### No component library

- `+` No additional packages
- `+` No additional knowledge/learning
- `-` Have to create all aspects of every component by hand

## Resources

- [USWDS: The United States Web Design System](https://designsystem.digital.gov/)
- [React USWDS Storybook](https://trussworks.github.io/react-uswds/?path=/story/components-accordion--borderless)
- [Using the USWDS as an Engineer — Truss](https://truss.works/blog/uswds-for-engineers)
- [Using the USWDS as a UX Designer — Truss](https://truss.works/blog/uswds-for-designers)
- [MUI: The React component library you always wanted](https://mui.com/)
- [Theming - MUI](https://mui.com/customization/theming/)
- [Semantic UI](https://semantic-ui.com/)
- [React-Bootstrap](https://react-bootstrap.github.io/)
