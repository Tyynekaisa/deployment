# Deployment

Course: **AT00BY10-3012 Ohjelmistojen ylläpito ja testaus**  
Assignment: **VII - Deployment**  
Author: **Kaisa Juhola**  
Updated: **20.3.2026**

[![Coverage Status](https://coveralls.io/repos/github/Tyynekaisa/deployment/badge.svg?branch=main)](https://coveralls.io/github/Tyynekaisa/deployment?branch=main)

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
* (**c8** for coverage reporting)

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

<!-- Coverage reports are generated in:

coverage/lcov.info 
Is this needed?-->



## Unit Testing

Unit tests were implemented for multiple functions in the library. The tests are structured using the following categories:

* Normal behaviour
* Invalid input
* Empty input
* Edge cases

Each function has its own test file (when applicable), improving readability and maintainability.

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

<!-- ### Workflow configuration -->

## Coveralls Integration

Coverage reporting is handled by [Coveralls](https://coveralls.io/).

The GitHub repository was connected to Coveralls, and coverage data is automatically sent from the CI pipeline.

### How it works

* Coverage is generated using c8
* Output file: coverage/lcov.info
* GitHub Actions sends the report to Coveralls
* Coveralls displays coverage statistics and trends

The coverage badge is added to the beginning of this document.

## Issue Reports

TODO
