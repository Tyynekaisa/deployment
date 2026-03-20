// clamp.test.js
// 20.3.2026
// Unit tests for clamp.js using Chai's expect style
// Author: Kaisa Juhola

import { expect } from "chai"
import clamp from "../src/clamp.js"

describe("clamp", () => {

  // Before and after -hooks for setup and teardown
  before (() => {
    console.log("Starting clamp.js tests.")
  })

  after (() => {
    console.log("Finished clamp.js tests.")
  })

  // Normal behaviour tests
  describe("normal behaviour", () => {
    it("should clamp below lower bound", () => {
      expect(clamp(-10, -5, 5)).to.equal(-5)
    })

    it("should clamp above upper bound", () => {
      expect(clamp(10, -5, 5)).to.equal(5)
    })
  })

  // Invalid input tests
  describe("invalid input", () => {
    it("should handle NaN input", () => {
      expect(isNaN(clamp(NaN, 0, 10))).to.equal(true)
    })
  })

  // Empty input tests
  describe("empty input", () => {
    it("should return NaN when no arguments", () => {
      expect(isNaN(clamp())).to.equal(true)
    })
  })

  // Edge cases tests
  describe("edge cases", () => {
    it("should return number if within bounds", () => {
      expect(clamp(3, 0, 5)).to.equal(3)
    })

    it("should handle string numbers", () => {
      expect(clamp("10", 0, 5)).to.equal(5)
    })
  })

})