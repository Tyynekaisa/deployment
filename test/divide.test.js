// divide.test.js
// 20.3.2026
// Unit tests for divide.js using Chai's expect style
// Author: Kaisa Juhola

import { expect } from "chai"
import divide from "../src/divide.js"

describe("divide", () => {

  // Before and after -hooks for setup and teardown 
  before (() => {
    console.log("Starting divide.js tests.")
  })

  after (() => {
    console.log("Finished divide.js tests.")
  })

  // Normal behaviour tests
  describe("normal behaviour", () => {
    it("should divide two numbers", () => {
      expect(divide(6, 4)).to.equal(1.5)
    })

    it("should divide integers correctly", () => {
      expect(divide(10, 2)).to.equal(5)
    })
  })

  // Invalid input tests
  describe("invalid input", () => {
    it("should handle division by zero", () => {
      expect(divide(5, 0)).to.equal(Infinity)
    })

    it("should return NaN when inputs are invalid", () => {
      expect(divide("a", 2)).to.be.NaN
    })
  })

  // Empty input tests
  describe("empty input", () => {
    it("should return default when no arguments provided", () => {
      expect(divide()).to.equal(1)
    })
  })

  // Edge case tests
  describe("edge cases", () => {
    it("should handle negative numbers", () => {
      expect(divide(-6, 2)).to.equal(-3)
    })

    it("should handle decimals", () => {
      expect(divide(5, 2)).to.equal(2.5)
    })

    it("should handle string numbers", () => {
      expect(divide("6", "2")).to.equal(3)
    })
  })

})