// isEmpty.test.js
// 20.3.2026
// Unit tests for isEmpty.js using Chai's expect style
// Author: Kaisa Juhola

import { expect } from "chai"
import isEmpty from "../src/isEmpty.js"

describe("isEmpty", () => {

  // Before and after -hooks for setup and teardown 
  before (() => {
    console.log("Starting isEmpty.js tests.")
  })

  after (() => {
    console.log("Finished isEmpty.js tests.")
  })
  
  // Normal behaviour tests
  describe("normal behaviour", () => {
    it("should return false for non-empty array", () => {
      expect(isEmpty([1,2,3])).to.equal(false)
    })

    it("should return false for non-empty object", () => {
      expect(isEmpty({ a: 1 })).to.equal(false)
    })

    it("should return false for non-empty string", () => {
      expect(isEmpty("abc")).to.equal(false)
    })

    it("should return false for non-empty Map", () => {
      const map = new Map()
      map.set("a", 1)
      expect(isEmpty(map)).to.equal(false)
    })

    it("should return false for non-empty Set", () => {
      const set = new Set([1])
      expect(isEmpty(set)).to.equal(false)
    })
  })

  // Invalid input tests
  describe("invalid input", () => {
    it("should return true for null", () => {
      expect(isEmpty(null)).to.equal(true)
    })

    it("should return true for undefined", () => {
      expect(isEmpty(undefined)).to.equal(true)
    })
  })

  // Empty input tests
  describe("empty input", () => {
    it("should return true for empty array", () => {
      expect(isEmpty([])).to.equal(true)
    })

    it("should return true for empty object", () => {
      expect(isEmpty({})).to.equal(true)
    })

    it("should return true for empty string", () => {
      expect(isEmpty("")).to.equal(true)
    })

    it("should return true for empty Map", () => {
      expect(isEmpty(new Map())).to.equal(true)
    })

    it("should return true for empty Set", () => {
      expect(isEmpty(new Set())).to.equal(true)
    })
  })

  // Edge case tests
  describe("edge cases", () => {
    it("should return true for numbers", () => {
      expect(isEmpty(1)).to.equal(true)
    })

    it("should return true for booleans", () => {
      expect(isEmpty(true)).to.equal(true)
    })

    // Array-like objects
    it("should return false for array-like object with length", () => {
      const obj = { 0: "a", length: 1 }
      expect(isEmpty(obj)).to.equal(false)
    })

    it("should return true for array-like object with length 0", () => {
      const obj = { length: 0 }
      expect(isEmpty(obj)).to.equal(true)
    })
  })

})