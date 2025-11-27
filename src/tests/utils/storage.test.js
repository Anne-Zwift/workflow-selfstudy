import { expect, describe, it, beforeEach } from 'vitest';
import { saveToken, getToken } from '../../utils/storage';

/**
 * @file Test suite for the storage utility functions 'saveToken' and 'getToken'.
 * Mocks the global 'localStorage' object using an in-memory object for isolated testing.
 * Each test starts with a fresh storage object.
 * Mock test for local storage methods setItem and getItem using beforeEach to hold our Object data.
 * Each function are tested separately.
 */
describe('Storage functions', () => {
  beforeEach(() => {
    const storage = {}; // Create a object to store our data.

    global.localStorage = {
      // Create mock version of the localStorage methods.
      setItem: (key, value) => (storage[key] = value),
      getItem: (key) => storage[key],
    };
  });

  describe('saveToken', () => {
    it('saves the token to storage', () => {
      const testToken = 'test-Token';
      saveToken(testToken);
      expect(localStorage.getItem('token')).toBe(JSON.stringify(testToken));
    });
  });

  describe('getToken', () => {
    it('retrieves the token from storage', () => {
      localStorage.setItem('token', JSON.stringify('test-token'));

      const retrievedToken = getToken();
      expect(retrievedToken).toBe('test-Token');
    });

    it('returns null when no token exists', () => {
      const token = getToken(); // Will return null
      expect(token).toBeNull();
    });
  });
});
