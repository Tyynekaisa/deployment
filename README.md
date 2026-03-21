# Deployment

Course: **AT00BY10-3012 Ohjelmistojen ylläpito ja testaus**  
Assignment: **VII - Deployment**  
Author: **Kaisa Juhola**  
Updated: **21.3.2026**

[![Coverage Status](https://coveralls.io/repos/github/Tyynekaisa/deployment/badge.svg)](https://coveralls.io/github/Tyynekaisa/deployment)

## Description

The goal of this project was to implement unit tests for a given JavaScript utility library. The objective was to achieve at least 60% test coverage, create a working CI pipeline using GitHub Actions, and integrate coverage reporting with Coveralls.

## Project Structure

```
.
│
├── src/                 # Library functions
│   ├── add.js
│   ├── at.js
│   ├── camelCase.js
│   ├── ...
│   ├── LICENSE
│   └── .internal/       # Internal helper functions (not tested directly)
│
├── test/                # Unit tests
│   ├── add.test.js
│   ├── at.test.js
│   ├── camelCase.test.js
│   ├── ...
│
├── .github/
│   └── workflows/
│       └── test.yml    # GitHub Actions pipeline
│
├── LICENSE
├── package-lock.json
├── package.json
└── README.md           # Documentation           
```
The src directory contains over 40 utility functions. Tests are written per function and located in the test directory. The .internal directory contains helper functions that were not directly tested.

## Local Development Environment

The local environment was set up using:

* **Node.js** (v22.x)
* **npm** for dependency management
* **Mocha** as the test runner
* **Chai** using the expect style
* **c8** for coverage reporting locally

### Installation

``` bash
npm install
```

### Running tests

``` bash
npm test
```

### Running coverage

``` bash
npm run coverage
```

<!-- Coverage reports are generated locally in:

coverage/lcov.info 
Is this actually needed ??-->

### Coverage Tool: c8

The coverage tool chosen for this project was c8.

The main reason for selecting c8 is that it is a lightweight and modern coverage tool that works directly with Node.js built-in V8 coverage. This makes it simple to use without requiring complex configuration.

Another key reason was the ability to generate coverage reports locally. Running coverage locally allowed faster feedback during development and made it easier to identify untested code areas before pushing changes to GitHub.

Although coverage is ultimately reported via Coveralls in the CI pipeline, generating coverage locally helped:

* verify that tests actually increase coverage
* debug missing branches and edge cases
* ensure the required 60% threshold is reached before CI execution

Altough local coverage execution is not strictly required for the GitHub Actions workflow, it significantly improved my development efficiency and understanding.

### About coverage-% and included files

Code coverage percentage is calculated based on how much of the source code is executed during test runs. The key metrics include:

* statements
* branches
* functions
* lines

By default, the coverage tool would include all files in the project, including internal helper functions. However, this would distort the results and not accurately reflect the coverage of the actual library functionality.

For this reason, the coverage configuration was adjusted in the package configuration:

```json
"c8": {
  "include": [
    "src/*.js"
  ],
  "exclude": [
    "test/**",
    "src/.internal/**"
  ]
}
```

## Unit Testing

Unit tests were implemented for multiple functions in the library. The tests are structured using the following categories:

* Normal behaviour
* Invalid input
* Empty input
* Edge cases

### Example Structure

``` JavaScript
describe("functionName", () => {

  before(() => {
    console.log("Starting tests.")
  })

  after(() => {
    console.log("Finished tests.")
  })

  describe("normal behaviour", () => { ... })
  describe("invalid input", () => { ... })
  describe("empty input", () => { ... })
  describe("edge cases", () => { ... })

})
```

### Test File Structure

Each function was tested in its own test file.

This structure was chosen to improve:

* readability
* maintainability
* scalability

Since the library contains over 40 functions, grouping all tests into a single file would have made the test suite difficult to navigate and maintain.

By separating tests per function:

* it is easier to locate failing tests
* test files remain small and focused
* adding new tests does not affect unrelated parts

This approach also follows common best practices in JavaScript testing.

### Test Selection Strategy

Testing was initially started from the beginning of the source directory, implementing tests for functions one by one.

However, during the process it became clear that many functions depend on other functions. Because of these dependencies, testing certain functions provided broader coverage than others.

For example:

* testing higher-level functions indirectly tests their dependencies
* some utility functions are reused across multiple modules

Due to this, the testing strategy shifted towards prioritizing functions that:

* have dependencies
* are used by other functions
* provide higher coverage impact

This approach made it possible to reach the required coverage more efficiently while still identifying critical issues.

### Tested functions

| FUNCTION      | TEST                                            | FUNCTION          | TEST              |
| ------------- | -------------                                   | ----------------  | ----------------  |
| add           | [add.test](/test/add.test.js)                   | isArrayLikeObject | [isArrayLikeObject.test](/test/isArrayLikeObject.test.js) |
| at            | [at.test](/test/at.test.js)                     | isBoolean         | -                 |
| camelCase     | [camelCase.test](/test/camelCase.test.js)       | isBuffer          | tested indirectly |
| capitalize    | [capitalize.test](/test/capitalize.test.js)     | isDate            | -                 | 
| castArray     | [castArray.test](/test/castArray.test.js)       | isEmpty           | [isEmpty.test](/test/isEmpty.test.js)|
| ceil          | [ceil.test](/test/ceil.test.js)                 | isLength          | tested indirectly |
| chunk         | [chunk.test](/test/chunk.test.js)               | isObject          | tested indirectly |
| clamp         | [clamp.test](/test/clamp.test.js)               | isObjectLike      | tested indirectly |
| compact       | [compact.test](/test/compact.test.js)           | isSymbol          | tested indirectly |
| countBy       | [countBy.test](/test/countBy.test.js)           | isTypedArray      | tested indirectly |
| defaultTo     | [defaultTo.test](/test/defaultTo.test.js)       | keys              | tested indirectly |
| defaultToAny  | [defaultToAny.test](/test/defaultToAny.test.js) | map               | -                 |
| difference    | -                                               | memoize           | tested indirectly |
| divide        | [divide.test](/test/divide.test.js)             | reduce            | tested indirectly |
| drop          | [drop.test](/test/drop.test.js)                 | slice             | tested indirectly |
| endsWith      | -                                               | toFinite          | [tofinite.test](/test/toFinite.test.js) |
| eq            | -                                               | toInteger         | tested indirectly |
| every         | -                                               | toNumber          | tested indirectly |
| filter        | [filter.test](/test/filter.test.js)             | toString          | tested indirectly |
| get           | tested indirectly                               | upperFirst        | tested indirectly |
| isArguments   | tested indirectly                               | words             | tested indirectly |
| isArrayLike   | tested indirectly                               |                   |                   |

### Notes

* Some functions (intentionally) contained bugs, which were identified either by running an eye over the code or through failing tests.
* Not all files were tested, but the required coverage threshold (60%) was exceeded.

## GitHub Repository

The project is hosted on GitHub as a public repository.

All development was first done locally and then pushed to GitHub using Git.

## GitHub Actions (CI Pipeline)

A CI pipeline was implemented using GitHub Actions.

The workflow runs automatically on each push to the repository.

### Workflow steps

* Checkout repository
* Setup Node.js
* Install dependencies
* Run tests
* Generate coverage report
* Send coverage data to Coveralls

### Workflow configuration

Workflow file is located to [.github/workflows/test.yml](/.github/workflows/test.yml)

![Github Actions Workflow Code](/img/workflow.png)  
**Image1:** GitHub Actions workflow

## Coveralls Integration

Coverage reporting is handled by [Coveralls](https://coveralls.io/).

The GitHub repository was connected to Coveralls, and coverage data is automatically sent from the CI pipeline.

### How it works

* Coverage is generated using c8
<!-- * Output file: coverage/lcov.info  -->
* GitHub Actions sends the report to Coveralls
* Coveralls displays coverage statistics and trends

### Coveralls Report

![Coveralls Report](/img/coveralls.png)  
**Image2:** Coveralls report

The full public report is available at: [https://coveralls.io/github/Tyynekaisa/deployment](https://coveralls.io/github/Tyynekaisa/deployment)

The coverage badge is added to the beginning of this document.

## Testing Environment and Pipeline

The testing setup consists of three main parts:

1. Local environment  
2. GitHub repository with CI pipeline  
3. Coveralls integration  

In the local environment:

* tests are written and executed using Node.js, Mocha, and Chai
* coverage is measured using c8
* issues are identified (and ideally also fixed)

In GitHub:

* the source code and tests are stored in a public repository
* GitHub Actions is used to automatically run tests on each push
* the CI pipeline installs dependencies and executes the test suite

In Coveralls:

* coverage data is collected from the CI pipeline
* coverage statistics are displayed and tracked over time

This workflow ensures that:

* tests are validated locally before committing
* all changes are automatically tested in CI
* coverage is continuously monitored

Overall, the pipeline provides a reliable and automated testing process from development to reporting.

## Issue Reports

During testing, several issues were discovered in the library. The findings are summarized in the table below.

| FUNCTION      | TEST RESULTS   | PRIORITY         |
| ------------- | -------------  | ---------------- |
| add           | OK             |                  |
| at            | OK             |                  |
| camelCase     | Critical       | Fix immediately  |
| capitalize    | Minor          | Fix later        |
| castArray     | Minor          | Fix later        |
| ceil          | Critical       | Fix immediately  |
| chunk         | Critical       | Fix immediately  |
| clamp         | Critical       | Fix immediately  |
| compact       | Critical       | Fix immediately  |
| countBy       | Critical       | Fix immediately  |
| defaultTo     | Minor          | Fix later        |
| defaultToAny  | Minor          | Fix later        |
| divide        | OK (fixed)     |                  |
| drop          | OK             |                  |
| filter        | OK (fixed)     |                  |
| isArrayLikeObject| OK          |                  |
| isEmpty       | Minor          | Fix later        |
| toFinite      | OK             |                  |

The testing process revealed both **critical** and **minor** issues in the library.

### Critical Errors

Several functions contained critical bugs that caused most or all test cases to fail. These functions are not usable in their current state and require immediate fixes.

**Affected functions:**

* camelCase
* ceil
* chunk
* compact
* countBy

These issues were reported in the GitHub issue tracker and should be prioritized.

### Minor Errors

Some functions worked correctly in general but failed in specific edge cases or did not fully match their expected behavior or documentation.

**Affected functions:**

* capitalize
* castArray
* defaultTo
* defaultToAny
* isEmpty

These issues require further investigation to determine whether the implementation or the tests need adjustment.

### Fixed before testing

Some of the functions contained such obvious errors that I noticed them immediately and fixed before testing. It was easier and faster to do so, than to test first and write issues for them.  
After fixing they passed all tests.

* divide
* filter

![divide.js error](/img/divide_error.png)  
**Image 2a:** Error in divide.js

![divide.js fix](/img/divide_fix.png)  
**Image 2b:** Fixed divide function

![filter.js error](/img/filter_error.png)  
**Image 3a:** Error in filter.js

![filter.js fix](/img/filter_fix.png)  
**Image 3b:** Fixed filter function

## Issue Tracking

All issues are available here:
[https://github.com/Tyynekaisa/deployment/issues](https://github.com/Tyynekaisa/deployment/issues)

### Notes

When troubleshooting and fixing issues, dependencies on other functions should be taken into consideration. If the bug that caused the test to fail is not found in the tested function, it may be in one of the imported functions.

## Evaluation of Library Quality

Based on the testing results:

* A significant portion of the library functions work correctly
* However, multiple critical functions contain major bugs
* Some functions behave inconsistently with their documentation

Therefore, **the library is not production-ready** in its current state without fixes.
