// add.test.js
// 16.3.2026
// Unit tests for add.js using Chai's expect style
// Author: Kaisa Juhola

import { expect } from "chai"
import add from "../src/add.js"

describe("add", () => {

  // Before and after -hooks for setup and teardown
  before (() => {
    console.log("Starting add.js tests.")
  })

  after (() => {
    console.log("Finished add.js tests.")
  })

  // Normal behaviour tests
  describe("normal behaviour", () => {
    it("should add two numbers (6, 4)", () => {
      const result = add(6, 4)
      expect(result).to.equal(10)
    })

    it("should add two numbers when both are zero (0, 0)", () => {
      const result = add(0, 0)
      expect(result).to.equal(0)
    })

    it("should add two numbers when other number is negative (-2, 3)", () => {
      const result = add(-2, 3)
      expect(result).to.equal(1)
    })

    it("should add two numbers when both are negative (-2, -3)", () => {
      const result = add(-2, -3)
      expect(result).to.equal(-5)
    })

    it("should add two floating point numbers (1.5, 2.5)", () => {
      const result = add(1.5, 2.5)
      expect(result).to.equal(4)
    })
  })
})