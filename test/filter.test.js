// filter.test.js
// 15.3.2026
// Unit tests for filter.js using Chai's expect style
// Author: Kaisa Juhola

import { expect } from "chai"
import filter from "../src/filter.js"

describe("filter", () => {

  // Before and after -hooks for setup and teardown
  before (() => {
    console.log("Starting filter.js tests.")
  })

  after (() => {
    console.log("Finished filter.js tests.")
  })

  describe("normal behaviour", () => {
    it("should filter values based on predicate", () => {
      const arr = [1,2,3,4]
      const result = filter(arr, n => n % 2 === 0)
      expect(result).to.deep.equal([2,4])
    })

    it("should filter values using index in predicate", () => {
      const arr = ["a", "b", "c", "d"]
      const result = filter(arr, (value, index) => index % 2 === 0)
      expect(result).to.deep.equal(["a", "c"])
    })

    it("should return empty array when no values match", () => {
      const arr = [1,3,5]
      const result = filter(arr, n => n % 2 === 0)
      expect(result).to.deep.equal([])
    })

    it("should return all values when predicate always true", () => {
      const arr = [1,2,3]
      const result = filter(arr, () => true)
      expect(result).to.deep.equal([1,2,3])
    })

    it("should pass value, index and array to predicate", () => {
      const arr = [10]
      let received
      filter(arr, (...args) => {
        received = args
        return true
      })

      expect(received[0]).to.equal(10)
      expect(received[1]).to.equal(0)
      expect(received[2]).to.equal(arr)
    })

    it("should not modify the original array", () => {
      const arr = [1,2,3]
      filter(arr, n => n > 1)
      expect(arr).to.deep.equal([1,2,3])
    })
  })

  describe("invalid input", () => {
    it("should return empty array when array is null", () => {
      const result = filter(null, () => true)

      expect(result).to.deep.equal([])
    })
  })

  describe("empty input", () => {
      it("should return empty array when input array is empty", () => {
      const result = filter([], () => true)

      expect(result).to.deep.equal([])
    })
  })

})