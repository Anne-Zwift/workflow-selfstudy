import { expect, it, describe } from 'vitest';
import { capitalFirstLetter } from '../../utils/capitalisation';

describe('capitalFirstLetter', () => {
  const testCases = [
    { string: 'lowercaseword', expected: 'Lowercaseword' },
    { string: 'cAPITALIZED', expected: 'CAPITALIZED' },
    { string: '', expected: '' },
    { string: 'l', expected: 'L' },
    { string: ' space', expected: ' space' },
  ];

  testCases.forEach(({ string, expected }) => {
    it(`returns ${expected} when capitalizing "${string}"`, () => {
      const result = capitalFirstLetter(string);
      expect(result).toBe(expected);
    });
  });
});
