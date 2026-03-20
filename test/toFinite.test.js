// toFinite.test.js
// 20.3.2026
// Unit tests for toFinite.js using Chai's expect style
// Author: Kaisa Juhola

import { expect } from "chai"
import toFinite from "../src/toFinite.js"

describe("toFinite", () => {

  // Before and after -hooks for setup and teardown
  before (() => {
    console.log("Starting toFinite.js tests.")
  })

  after (() => {
    console.log("Finished toFinite.js tests.")
  })

  // Normal behaviour tests
  describe("normal behaviour", () => {
    it("should return number as is", () => {
      expect(toFinite(3.2)).to.equal(3.2)
    })

    it("should convert string to number", () => {
      expect(toFinite('3.2')).to.equal(3.2)
    })
  })

  // Invalid input tests
  describe("invalid input", () => {
    it("should return 0 for NaN", () => {
      expect(toFinite(NaN)).to.equal(0)
    })

    it("should return 0 for undefined", () => {
      expect(toFinite(undefined)).to.equal(0)
    })

    it("should return 0 for null", () => {
      expect(toFinite(null)).to.equal(0)
    })
  })

  // Empty input tests
  describe("empty input", () => {
    it("should return 0 when no arguments given", () => {
      expect(toFinite()).to.equal(0)
    })
  })

  // Edge cases tests
  describe("edge cases", () => {
    it("should return 0 for false", () => {
      expect(toFinite(false)).to.equal(0)
    })

    it("should preserve 0", () => {
      expect(toFinite(0)).to.equal(0)
    })

    it("should convert Infinity to MAX_INTEGER", () => {
      expect(toFinite(Infinity)).to.equal(1.7976931348623157e+308)
    })

    it("should convert -Infinity to -MAX_INTEGER", () => {
      expect(toFinite(-Infinity)).to.equal(-1.7976931348623157e+308)
    })

    it("should handle very small numbers", () => {
      expect(toFinite(Number.MIN_VALUE)).to.equal(Number.MIN_VALUE)
    })
  })

})
