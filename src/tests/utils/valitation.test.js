import { expect, it, describe } from 'vitest';
import { validateUserName } from '../../utils/validation';

describe('validateUserName', () => {
  it('returns true for username with 3 characters', () => {
    // Arrange: Set up the test data
    const username = 'Anne';
    // Act: Call the function being tested
    const result = validateUserName(username);
    // Assert: Check if the result matches the expected output
    expect(result).toBe(true);
  });
  it('returns true if username has more than 3 characters', () => {
    const username = 'Anne-Zwift';
    const result = validateUserName(username);
    expect(result).toBe(true);
  });
  it('returns false for username with less than 3 characters', () => {
    const username = 'Zo';
    const result = validateUserName(username);
    expect(result).toBe(false);
  });
});
