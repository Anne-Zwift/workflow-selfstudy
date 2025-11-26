import { expect, it, describe } from 'vitest';
import { validatePassword } from '../../utils/password';

/*describe(validatePassword, () => {
  it("returns true for password with at exactly 12 characters", () => {
    const password = 'asdrepoysnis';
    const result = validatePassword(password);
    expect(result).toBe(true);
  });
  it("returns false for password less than 12 characters", () => {
    const password = 'ktosmroalti';
    const result = validatePassword(password);
    expect(result).toBe(false);
  })
  it("returns true for password longer than 12 characters", () => {
    const password = 'egjsptkuavloofers';
    const result = validatePassword(password);
    expect(result).toBe(true);
  })
});*/

/**
 * In these tests:
 * We define an array of test cases, each with a password and the expected result.
 * We use forEach to run the same test for each case.
 * The test description changes based on the password and expected result.
 * We check if the function returns the expected result for each password.
This approach allows us to test multiple scenarios efficiently.
 */

describe('validatePassword', () => {
  const testCases = [
    { password: 'short', expected: false },
    { password: 'exactly00012', expected: true },
    { password: 'longerpassword', expected: true },
  ];

  testCases.forEach(({ password, expected }) => {
    it(`returns ${expected} for password "${password}"`, () => {
      const result = validatePassword(password);
      expect(result).toBe(expected);
    });
  });
});
