// castArray.test.js
// 17.3.2026
// Unit tests for castArray.js using Chai's expect style
// Author: Kaisa Juhola

import { expect } from "chai"
import castArray from "../src/castArray.js"

describe("castArray", () => {

  // Before and after -hooks for setup and teardown
  before (() => {
    console.log("Starting castArray.js tests.")
  })

  after (() => {
    console.log("Finished castArray.js tests.")
  })

  describe("normal behaviour", () => {
    it("should wrap value into array", () => {
      expect(castArray(1)).to.deep.equal([1])
    })

    it("should wrap string into array", () => {
      expect(castArray("abc")).to.deep.equal(["abc"])
    })
  })

  describe("invalid input", () => {
    it("should handle undefined explicitly passed", () => {
      expect(castArray(undefined)).to.deep.equal([undefined])
    })
  })

  describe("empty input", () => {
    it("should return [undefined] when no arguments given", () => {
      expect(castArray()).to.deep.equal([undefined])
    })
  })

  describe("edge cases", () => {
    it("should return same array if already array", () => {
      const arr = [1,2,3]
      expect(castArray(arr)).to.equal(arr)
    })

    it("should wrap null into array", () => {
      expect(castArray(null)).to.deep.equal([null])
    })

    it("should wrap object into array", () => {
      expect(castArray({a:1})).to.deep.equal([{a:1}])
    })
  })

})