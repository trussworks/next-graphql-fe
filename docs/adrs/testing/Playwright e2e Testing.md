# Playwright e2e Testing

[Playwright](https://playwright.dev/) allows running e2e tests using multiple browsers and devices in parallel. In this project, the e2e tests use a live frontend and backend like a real user would to provide confidence across the entirety of the application.

## Run Tests

Before running e2e tests, both the frontend and backend must be running. The playwright tests will need the address of the frontend to be tested. This is set using the `PLAYWRIGHT_URL` env variable. The default is set to `http://localhost:3000` in the package.json scripts.

### All Tests

`yarn e2e` - Run all tests in all browsers as configured by the `playwright.config.ts` file

### Single Test

`yarn e2e test-name` - Run test(s) that at least partially match with the provided test name.

### Multiple tests

`yarn e2e <path-to-tests>` - Run all test that are within the provided path

### Single Browser

`yarn e2e:chrome` - Run all tests in only the chrome browser, can accept test file/path to run specific tests.

### Test Options

There are several options available to configure test running, the most useful are:

- `--debug` - Run tests using the Playwright Inspector, see [Debug Tests](#debug-tests)
- `--project` - Set the browser for the test run. Very useful in development and debugging to run tests in a single browser. For available project values see: https://playwright.dev/docs/test-advanced#projects
- `--timeout` - Test timeout in milliseconds, default is 30 seconds
- `--grep` - Run tests matching a regular expression

A complete list of options can be found in the Playwright documentation [here](https://playwright.dev/docs/test-cli#reference).

**Note:** All of the above methods of running tests and test options can be combined to allow running of specific tests in desired fashion. For example, to run all tests with the word `home` in the test name, in debug mode with only on only the Chrome browser: `yarn e2e:chrome home --debug`

## Debug Tests

`yarn e2e --debug`

Launches a headed browser (for each test) in debug mode allowing you to step through tests. In debug mode, the [Playwright inspector](https://playwright.dev/docs/inspector) is launched and each test is paused at the very beginning. Then, you can step through the tests and watch what occurs in the browser as the test progresses.

Breakpoints can be added to tests by adding the line `this.page.pause()` anywhere in a test. The inspector will pause on this line, which is especially useful if you are debugging the end of a test and don't want to step line-by-line through the whole test.

You can click `Explore` while paused in a test to select elements on the page. Playwright will then display the locator you'd likely use for that element in your tests.

![](blob:https://truss-dds.atlassian.net/7ddde607-7722-4ff9-ba16-00a9b6daa9fa)

In addition to the inspector and debug mode, Playwright also has a trace viewer and other debugging tools, see: [Debugging tools | Playwright](https://playwright.dev/docs/debug).

## Writing Tests

Playwright test files themselves (suffixed with `*.spec.ts`) primarily consist of page interactions, assertions, and light-weight locators. Any re-usable logic around page interactions or locators should be contained in the page being tested’s “page object model” (see [Page Object Model Pattern](https://truss-dds.atlassian.net/wiki/spaces/eng/pages/86114329/Playwright+e2e+Testing#Page-Object-Model-Pattern "https://truss-dds.atlassian.net/wiki/spaces/eng/pages/86114329/Playwright+e2e+Testing#Page-Object-Model-Pattern") below). In debug mode, there is a ‘Record’ button that allows you to generate tests by recording your actions. This is generally a great starting point, especially to get element locators flushed out quickly.

In playwright, the `expect` function and most other functions you will use are async to enable waiting/retrys. This means that in your tests will be using `await` a lot!

## Page Object Model Pattern

The [Page Object Model Pattern](https://playwright.dev/docs/test-pom) is used in testing to abstract away and simplify interactions with a web page. This pattern involves making a ‘page object model’ (typescript class) for each web page to be tested. These (highly reusable) page models should contain any reusable page interaction logic. Typically this means things like locating elements on the page ([locators](https://playwright.dev/docs/api/class-locator)) or page specific interactions like filling out form fields or clicking on buttons/checkboxes. Keeping this logic in page models rather than test files greatly simplifies writing new tests and improves test readability. Tests files themselves just become an easy to follow series of assertions and high level pages interactions using page model methods. The details of page interactions and locating elements are abstracted away and most important are **re-usable across multiple tests**. For more, including great examples, see: [Page Object Model | Playwright](https://playwright.dev/docs/test-pom).

## Configuration

Playwright tests are configured using the `playwright.config.ts` file in the root of the project. This currently only specifies which browsers to run all tests using but could do **much** more ([Configuration | Playwright](https://playwright.dev/docs/test-configuration)) including:

- Record Video: [Record Video](https://playwright.dev/docs/test-configuration#record-video)
- Automatic screenshots: [Automatic screenshots](https://playwright.dev/docs/test-configuration#automatic-screenshots)
- Record Trace: [Record Test Trace](https://playwright.dev/docs/test-configuration#record-test-trace)

## Test Runner

We currently run the playwright tests using the Playwright test runner. This gives us all the cool debugging tools and nice developer experience. However, it is worth noting that **it is possible to run playwright tests using the Jest test runner** (the same test runner that is running our unit tests). This is something to keep in mind when working out things like running in CI or collecting test coverages.

## Next Steps

There are still a few things needing flushed out with the current playwright setup and config. The biggest one is a good way to run a single test rather than all the tests. This functionality of course [exists in playwright](https://playwright.dev/docs/test-cli) but we have no specific scripts or documentation to help engineers do so.

The other thing that has not been investigated thoroughly is code coverage reporting. We will want to consider the code coverage for playwright tests and potentially combine the results with the Jest code coverage results to get an accurate, combined code coverage report.
