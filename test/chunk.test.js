// chunk.test.js
// 20.3.2026
// Unit tests for chunk.js using Chai's expect style
// Author: Kaisa Juhola

import { expect } from "chai"
import chunk from "../src/chunk.js"

describe("chunk", () => {

  // Before and after -hooks for setup and teardown
  before (() => {
    console.log("Starting chunk.js tests.")
  })

  after (() => {
    console.log("Finished chunk.js tests.")
  })

  // Normal behaviour tests
  describe("normal behaviour", () => {
    it("should split array into chunks of given size", () => {
      const result = chunk(['a','b','c','d'], 2)
      expect(result).to.deep.equal([['a','b'], ['c','d']])
    })

    it("should handle uneven chunks", () => {
      const result = chunk(['a','b','c','d'], 3)
      expect(result).to.deep.equal([['a','b','c'], ['d']])
    })
  })

  // Invalid input tests
  describe("invalid input", () => {
    it("should return empty array when input is null", () => {
      expect(chunk(null, 2)).to.deep.equal([])
    })
  })

  // Empty input tests
  describe("empty input", () => {
    it("should return empty array for empty array", () => {
      expect(chunk([], 2)).to.deep.equal([])
    })
  })

  // Edge cases tests
  describe("edge cases", () => {
    it("should return empty array when size is 0", () => {
      expect(chunk([1,2,3], 0)).to.deep.equal([])
    })

    it("should default size to 1", () => {
      expect(chunk([1,2,3])).to.deep.equal([[1],[2],[3]])
    })
  })

})
