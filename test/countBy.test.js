// countBy.test.js
// 20.3.2026
// Unit tests for countBy.js using Chai's expect style
// Author: Kaisa Juhola

import { expect } from "chai"
import countBy from "../src/countBy.js"

describe("countBy", () => {

  // Before and after -hooks for setup and teardown
  before (() => {
    console.log("Starting compact.js tests.")
  })

  after (() => {
    console.log("Finished compact.js tests.")
  })

  // Normal behaviour tests
  const users = [
    { user: 'barney', active: true },
    { user: 'betty', active: true },
    { user: 'fred', active: false }
  ]

  describe("normal behaviour", () => {
    it("should count values based on iteratee", () => {
      const result = countBy(users, value => value.active)
      expect(result).to.deep.equal({ true: 2, false: 1 })
    })
  })

  // Invalid input tests
  describe("invalid input", () => {
    it("should handle null collection", () => {
      const result = countBy(null, x => x)
      expect(result).to.deep.equal({})
    })
  })

  // Empty input tests
  describe("empty input", () => {
    it("should return empty object for empty array", () => {
      expect(countBy([], x => x)).to.deep.equal({})
    })
  })

  // Edge cases tests
  describe("edge cases", () => {
    it("should group by string length", () => {
      const result = countBy(["a", "bb", "c"], x => x.length)
      expect(result).to.deep.equal({ 1: 2, 2: 1 })
    })

    it("should handle numbers", () => {
      const result = countBy([1,2,3,4], x => x % 2)
      expect(result).to.deep.equal({ 0: 2, 1: 2 })
    })
  })

})