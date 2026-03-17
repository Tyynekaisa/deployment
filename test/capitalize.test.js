// capitalize.test.js
// 17.3.2026
// Unit tests for capitalize.js using Chai's expect style
// Author: Kaisa Juhola

import { expect } from "chai"
import capitalize from "../src/capitalize.js"

describe("capitalize", () => {

  // Before and after -hooks for setup and teardown
  before (() => {
    console.log("Starting capitalize.js tests.")
  })

  after (() => {
    console.log("Finished capitalize.js tests.")
  })

  describe("normal behaviour", () => {
    it("should capitalize first letter and lowercase rest", () => {
      expect(capitalize("FRED")).to.equal("Fred")
    })

    it("should handle already lowercase string", () => {
      expect(capitalize("fred")).to.equal("Fred")
    })
  })

  describe("invalid input", () => {
    it("should handle null input", () => {
      expect(capitalize(null)).to.equal("")
    })
  })

  describe("empty input", () => {
    it("should return empty string for empty input", () => {
      expect(capitalize("")).to.equal("")
    })
  })

  describe("edge cases", () => {
    it("should handle single character", () => {
      expect(capitalize("a")).to.equal("A")
    })

    it("should handle numbers in string", () => {
      expect(capitalize("123abc")).to.equal("123abc")
    })
  })

})