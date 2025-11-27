/**
 * @file Manages the storage and retrieval of an authentication token using the browser's local storage.
 * This module provides simple, type-safe functions for securely handling the token string in the browser.
 */

const tokenKey = 'token';

/**
 * Saves the given token string to localStorage.
 * @param {string} token - The authentication token to be saved.
 * @returns {void}
 */

export function saveToken(token) {
  saveToStorage(tokenKey, token);
}

/**
 * Retrieves the token string from localStorage.
 * @returns {string|null} The stored authentication token, or null if no token is found.
 */

export function getToken() {
  return getFromStorage(tokenKey);
}

// Utility functions

function saveToStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function getFromStorage(key) {
  const value = localStorage.getItem(key);
  return value ? JSON.parse(value) : null;
}
