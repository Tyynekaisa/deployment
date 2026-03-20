// defaultTo.test.js
// 20.3.2026
// Unit tests for defaultTo.js using Chai's expect style
// Author: Kaisa Juhola

import { expect } from "chai"
import defaultTo from "../src/defaultTo.js"

describe("defaultTo", () => {

  // Before and after -hooks for setup and teardown 
  before (() => {
    console.log("Starting defaultTo.js tests.")
  })

  after (() => {
    console.log("Finished defaultTo.js tests.")
  })

  // Normal behaviour tests
  describe("normal behaviour", () => {
    it("should return value when it is not `NaN`, `null`, or `undefined`", () => {
      expect(defaultTo(1, 10)).to.equal(1)
    })

    it("should return string value when defined", () => {
      expect(defaultTo("hello", "default")).to.equal("hello")
    })
  })

  // Invalid input tests
  describe("invalid input", () => {
    it("should return default value when value is undefined", () => {
      expect(defaultTo(undefined, 10)).to.equal(10)
    })

    it("should return default value when value is null", () => {
      expect(defaultTo(null, 10)).to.equal(10)
    })

    it("should return default value when value is NaN", () => {
      const result = defaultTo(NaN, 10)
      expect(defaultTo(NaN, 10)).to.equal(10)
    })

  })

  // Empty input tests
  describe("empty input", () => {
    it("should return undefined when both values are undefined", () => {
      expect(defaultTo(undefined, undefined)).to.equal(undefined)
    })
  })

  // Edge cases tests
  describe("edge cases", () => {
    it("should return 0 if value is 0", () => {
      expect(defaultTo(0, 10)).to.equal(0)
    })

    it("should return false if value is false", () => {
      expect(defaultTo(false, true)).to.equal(false)
    })
  })

})