// compact.test.js
// 20.3.2026
// Unit tests for compact.js using Chai's expect style
// Author: Kaisa Juhola

import { expect } from "chai"
import compact from "../src/compact.js"

describe("compact", () => {

  // Before and after -hooks for setup and teardown
  before (() => {
    console.log("Starting compact.js tests.")
  })

  after (() => {
    console.log("Finished compact.js tests.")
  })

  // Normal behaviour tests
  describe("normal behaviour", () => {
    it("should remove falsey values", () => {
      const result = compact([0, 1, false, 2, '', 3])
      expect(result).to.deep.equal([1,2,3])
    })
  })

  // Invalid input tests
  describe("invalid input", () => {
    it("should throw or fail with null input", () => {
      expect(() => compact(null)).to.throw()
    })
  })

    // Empty input tests
  describe("empty input", () => {
    it("should return empty array for empty array", () => {
      expect(compact([])).to.deep.equal([])
    })
  })

  // Edge cases tests
  describe("edge cases", () => {
    it("should remove NaN and undefined", () => {
      const result = compact([NaN, undefined, 1])
      expect(result).to.deep.equal([1])
    })

    it("should create an empty array when all values are falsey", () => {
      const result = compact([0, false, '', null, undefined, NaN])
      expect(result).to.deep.equal([])
    })

    it("should not modify original array", () => {
      const arr = [0,1]
      compact(arr)
      expect(arr).to.deep.equal([0,1])
    })
  })

})