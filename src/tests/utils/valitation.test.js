import { expect, it } from 'vitest';
import { validateUserName } from '../../utils/validation';

it('checks if username is at least 3 characters', () => {
  // Arrange: Set up the test data
  const username = 'Anne';

  // Act: Call the function being tested
  const result = validateUserName(username);

  // Assert: Check if the result matches the expected output
  expect(result).toBe(true);
});
