# Accessibility (A11y) Testing

For a11y testing we are using [jest-aXe](https://github.com/trussworks/next-graphql-fe/blob/main/docs/adrs/FE-001%20Automated%20Accessibility%20Testing%20Framework%20is%20jest-aXe.md), a custom Jest matcher for a11y validation that utilizes the [aXe engine](https://github.com/dequelabs/axe-core) (like most all a11y testing tools). Since it is a [Jest matcher,](https://jestjs.io/docs/using-matchers) our a11y tests are run with the Jest test runner. A11y tests pass when there are no accessibility violations and fail when a violation is present. When a failure occurs, a very specific and _usually_ useful error message is produced stating what the a11y violation is and providing suggestions to resolve the violation. Currently there is no specific target/script to run only a11y tests, they are run in combination with unit tests (`yarn unit`).

## Writing A11y Tests

To write an a11y test, use React Testing Library to render the component in the state that you would like to validate for a11y violations. Then, use the `validateA11y` utility function to assert that there are no a11y violations in the provided container.

```TypeScript
import { render } from "@testing-library/react"
import { validateA11y } from "/utils/test-utils"

test("some component is accessiable ", async () => {
    // render component using react testing library
    const { container } = render(<SomeComponent someProp="abc"/>)

    // optionally interact with rendered component using react testing library

    // check that the current state of the rendered component has no a11y violations
    await validateA11y(container)
})
```

The `validateA11y` function is abstracting away the usage of jest-aXe. In short, this function does two actions:

1.  Scan rendered component/container for a11y violations
2.  Asserts that no a11y violations were found in the scan
