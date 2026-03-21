// camelCase.test.js
// 16.3.2026
// Unit tests for camelCase.js using Chai's expect style
// Author: Kaisa Juhola

import { expect } from "chai"
import camelCase from "../src/camelCase.js"

describe("camelCase", () => {

  // Before and after -hooks for setup and teardown
  before (() => {
    console.log("Starting camelCase.js tests.")
  })

  after (() => {
    console.log("Finished camelCase.js tests.")
  })

  // Normal behaviour tests
  describe("normal behaviour", () => {
    it("should convert string to camelCase", () => {
      const str = "Foo Bar"
      const result = camelCase(str)
      expect(result).to.equal("fooBar")
    })

    it("should convert string with multiple spaces to camelCase", () => {
      const str = "Foo   Bar"
      const result = camelCase(str)
      expect(result).to.equal("fooBar")
    })

    it("should convert string with special characters to camelCase", () => {
      const str = "--foo-bar--"
      const result = camelCase(str)
      expect(result).to.equal("fooBar")
    })

    it("should convert string with underscores and/or uppercase letters to camelCase", () => {
      const str = "__FOO_BAR__"
      const result = camelCase(str)
      expect(result).to.equal("fooBar")
    })

    it("should return lowercase word when input has only one word", () => {
      const str = "Foo"
      const result = camelCase(str)
      expect(result).to.equal("foo")
    })

    it("should handle numbers in string", () => {
      const str = "version 2 update"
      const result = camelCase(str)
      expect(result).to.equal("version2Update")
    })

    it("should handle already camelCased string", () => {
      const str = "fooBar"
      const result = camelCase(str)
      expect(result).to.equal("fooBar")
    })
  })

  // Invalid input tests
  describe("invalid input", () => {
    it.skip("should return empty string when input is null", () => {
      const result = camelCase(null)
      expect(result).to.equal("")
    })
  })

  // Empty input tests
  describe("empty input", () => {
      it("should return empty string when input is empty", () => {
      const str = ""
      const result = camelCase(str)
      expect(result).to.equal("")
      }) 
  })

  // Edge cases tests
  describe("edge cases", () => {
    it("should handle string with only special characters", () => {
      const str = "!!!"
      const result = camelCase(str)
      expect(result).to.equal("")
    })

    it("should convert non-string input to string and then to camelCase", () => {
      const num = 123
      const result = camelCase(num)
      expect(result).to.equal("123")
    })
  })

})