import { expect, it, describe } from 'vitest';
import { reverseString } from '../../utils/stringReverse';

describe('reverseString', () => {
  const testCases = [
    { string: 'hello', expected: 'olleh' },
    { string: '', expected: '' },
    { string: 'n', expected: 'n' },
    { string: 'word!', expected: '!drow' },
    { string: ' hello world ', expected: ' dlrow olleh ' },
  ];

  testCases.forEach(({ string, expected }) => {
    it(`returns ${expected} when reversing "${string}"`, () => {
      const result = reverseString(string);
      expect(result).toBe(expected);
    });
  });
});
