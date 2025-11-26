import { expect, it } from 'vitest';
import { greetUser } from '../../utils/greeting';

it('should generate a greeting message for the user', () => {
  // Arrange
  const username = 'Anne';
  const expectedGreeting = 'Hello Anne!';
  // Act
  const result = greetUser(username);
  // Assert
  expect(result).toBe(expectedGreeting);
});
