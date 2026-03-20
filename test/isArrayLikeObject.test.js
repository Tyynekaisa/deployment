// isArrayLikeObject.test.js
// 20.3.2026
// Unit tests for isArrayLikeObject.js using Chai's expect style
// Author: Kaisa Juhola

import { expect } from "chai"
import isArrayLikeObject from "../src/isArrayLikeObject.js"

describe("isArrayLikeObject", () => {

  // Before and after -hooks for setup and teardown 
  before (() => {
    console.log("Starting isArrayLikeObject.js tests.")
  })

  after (() => {
    console.log("Finished isArrayLikeObject.js tests.")
  })

  // Normal behaviour tests
  describe("normal behaviour", () => {
    it("should return true for arrays", () => {
      expect(isArrayLikeObject([1,2,3])).to.equal(true)
    })

    it("should return true for array-like objects", () => {
      const obj = { 0: "a", 1: "b", length: 2 }
      expect(isArrayLikeObject(obj)).to.equal(true)
    })

    it("should return false for functions", () => {
      expect(isArrayLikeObject(() => {})).to.equal(false)
    })

    it("should return false for strings (array-like but not object-like)", () => {
      expect(isArrayLikeObject("abc")).to.equal(false)
    })
  })

  // Invalid input tests
  describe("invalid input", () => {
    it("should return false for null", () => {
      expect(isArrayLikeObject(null)).to.equal(false)
    })
  })

  // Empty input tests
  describe("empty input", () => {
    it("should return false for undefined", () => {
      expect(isArrayLikeObject(undefined)).to.equal(false)
    })
  })

  // Edge case tests
  describe("edge cases", () => {
    it("should return false for plain objects without length", () => {
      expect(isArrayLikeObject({ a: 1, b: 2 })).to.equal(false)
    })

    it("should return true for empty array", () => {
      expect(isArrayLikeObject([])).to.equal(true)
    })
  })

})