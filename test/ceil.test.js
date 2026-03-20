// ceil.test.js
// 17.3.2026
// Unit tests for ceil.js using Chai's expect style
// Author: Kaisa Juholaimport { expect } from "chai"

import ceil from "../src/ceil.js"

describe("ceil", () => {

  // Before and after -hooks for setup and teardown
  before (() => {
    console.log("Starting ceil.js tests.")
  })

  after (() => {
    console.log("Finished ceil.js tests.")
  })

  // Normal behaviour tests
  describe("normal behaviour", () => {
    it("should round up to nearest integer", () => {
      expect(ceil(4.006)).to.equal(5)
    })

    it("should round up with precision", () => {
      expect(ceil(6.004, 2)).to.equal(6.01)
    })
  })

  // Invalid input tests
  describe("invalid input", () => {
    it("should handle NaN", () => {
      expect(isNaN(ceil(NaN))).to.equal(true)
    })
  })

// Empty input tests
  describe("empty input", () => {
    it("should return NaN when no arguments", () => {
      expect(isNaN(ceil())).to.equal(true)
    })
  })

  // Edge cases tests
  describe("edge cases", () => {
    it("should handle negative precision", () => {
      expect(ceil(6040, -2)).to.equal(6100)
    })

    it("should handle negative numbers", () => {
      expect(ceil(-4.2)).to.equal(-4)
    })
  })

})