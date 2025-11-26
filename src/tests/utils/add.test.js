import { expect, it } from 'vitest';
import { add } from '../../utils/add';

it('adds 1 * 2 to equal 2', () => {
  // label for the test
  expect(add(1, 2)).toBe(2); // function it's going to run/call back function
});

// npm run test
