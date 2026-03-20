// defaultToAny.test.js
// 20.3.2026
// Unit tests for defaultToAny.js using Chai's expect style
// Author: Kaisa Juhola

import { expect } from "chai"
import defaultToAny from "../src/defaultToAny.js"

describe("defaultToAny", () => {

  // Before and after -hooks for setup and teardown 
  before (() => {
    console.log("Starting defaultToAny.js tests.")
  })

  after (() => {
    console.log("Finished defaultToAny.js tests.")
  })

  // Normal behaviour tests
  describe("normal behaviour", () => {
    it("should return value if defined", () => {
      expect(defaultToAny(1, 10, 20)).to.equal(1)
    })

    it("should return first valid default value", () => {
      expect(defaultToAny(undefined, 10, 20)).to.equal(10)
    })
  })

  // Invalid input tests
  describe("invalid input", () => {
    it("should skip null and undefined values", () => {
      expect(defaultToAny(undefined, null, 20)).to.equal(20)
    })

    it("should skip null, undefined and NaN values", () => {
      expect(defaultToAny(undefined, null, NaN, 10)).to.equal(10)
    })
  })

  // Empty input tests
  describe("empty input", () => {
    it("should return initial value when no defaults provided", () => {
      expect(defaultToAny(5)).to.equal(5)
    })
  })

  // Edge cases tests
  describe("edge cases", () => {
    it("should return NaN if all values are invalid", () => {
      const result = defaultToAny(undefined, null, NaN)
      expect(result).to.be.NaN
    })
  })

})