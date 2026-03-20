// drop.test.js
// 20.3.2026
// Unit tests for drop.js using Chai's expect style
// Author: Kaisa Juhola

import { expect } from "chai"
import drop from "../src/drop.js"

describe("drop", () => {

  // Before and after -hooks for setup and teardown 
  before (() => {
    console.log("Starting drop.js tests.")
  })

  after (() => {
    console.log("Finished drop.js tests.")
  })

  // Normal behaviour tests
  describe("normal behaviour", () => {
    it("should drop one element by default", () => {
      expect(drop([1,2,3])).to.deep.equal([2,3])
    })

    it("should drop n elements", () => {
      expect(drop([1,2,3], 2)).to.deep.equal([3])
    })
  })

  // Invalid input tests
  describe("invalid input", () => {
    it("should return empty array when input is null", () => {
      expect(drop(null, 2)).to.deep.equal([])
    })
  })

  // Empty input tests
  describe("empty input", () => {
    it("should return empty array when array is empty", () => {
      expect(drop([], 2)).to.deep.equal([])
    })
  })

  // Edge cases tests
  describe("edge cases", () => {
    it("should return empty array when n is larger than length", () => {
      expect(drop([1,2,3], 5)).to.deep.equal([])
    })

    it("should return original array when n is 0", () => {
      expect(drop([1,2,3], 0)).to.deep.equal([1,2,3])
    })

    it("should treat negative n as 0", () => {
      expect(drop([1,2,3], -1)).to.deep.equal([1,2,3])
    })

    it("should handle non-integer n (converted with toInteger)", () => {
      expect(drop([1,2,3], 1.8)).to.deep.equal([2,3])
    })
  })

})