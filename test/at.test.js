// at.test.js
// 17.3.2026
// Unit tests for at.js using Chai's expect style
// Author: Kaisa Juhola

import { expect } from "chai"
import at from "../src/at.js"

describe("at", () => {

  // Before and after -hooks for setup and teardown
  before (() => {
    console.log("Starting at.js tests.")
  })

  after (() => {
    console.log("Finished at.js tests.")
  })

  // Normal behaviour tests
  const obj = { a: [{ b: { c: 3 } }, 4] }

  describe("normal behaviour", () => {
    it("should get values from object paths", () => {
      const result = at(obj, ['a[0].b.c', 'a[1]'])
      expect(result).to.deep.equal([3,4])
    })
  })

  // Invalid input tests
  describe("invalid input", () => {
    it("should handle null object", () => {
      const result = at(null, ['a'])
      expect(result).to.deep.equal([undefined])
    })
  })

  // Empty input tests
  describe("empty input", () => {
    it("should return empty array when no paths provided", () => {
      const result = at(obj)
      expect(result).to.deep.equal([])
    })
  })

  // Edge cases tests
  describe("edge cases", () => {
    it("should return undefined for non-existing path", () => {
      const result = at(obj, ['a[2]'])
      expect(result).to.deep.equal([undefined])
    })

    it("should handle multiple path arguments", () => {
      const result = at(obj, 'a[1]', 'a[0].b.c')
      expect(result).to.deep.equal([4,3])
    })
  })

})