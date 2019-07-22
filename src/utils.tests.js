import { sum, times } from './utils'

describe('Utils', () => {
  describe('Sum', () => {
    test('adds 1 + 2 to equal 3', () => {
      expect(sum(1, 2)).toBe(3)
    })
    test('adds 1 + 3 to equal 4', () => {
      expect(sum(1, 3)).toBe(4)
    })
    test('adds 1 + 3 to equal 8?', () => {
      expect(sum(1, 3)).toBe(8)
    })
  })
  describe('Times', () => {
    test('times 2 and 2 to equal 4', () => {
      expect(times(2, 2)).toBe(4)
    })
    test('times 4 and 2 to equal 8', () => {
      expect(times(4, 2)).toBe(8)
    })
    test('times 15 and 15 to equal 225', () => {
      expect(times(15, 15)).toBe(225)
    })
  })
})