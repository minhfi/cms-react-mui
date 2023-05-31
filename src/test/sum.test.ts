import { test, expect } from '@jest/globals'

const sum = (a: number, b: number) => a + b

test('sum should return the correct result', () => {
  const result = sum(2, 3) // Call the function with test inputs
  expect(result).toBe(5) // Assert that the result matches the expected value
})
