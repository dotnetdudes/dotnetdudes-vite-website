import { test, expect, afterEach, beforeEach} from 'vitest';
import { setItem } from '../storage.js';

let localStorage;

beforeEach(() => {
  // restore the original implementation
  localStorage = global.localStorage;
});

afterEach(() => {
  // restore the original implementation
  global.localStorage = localStorage;
});

// Test case 1: Valid input
test('setItem should set an item in localStorage', () => {
  const name = 'username';
  const item = 'JohnDoe';
  
  expect(setItem(name, item)).toBe(true);
  expect(localStorage.getItem(name)).toBe(item);
});

// Test case 2: Invalid input
test('setItem should return false if localStorage is not supported', () => {
  // Mocking localStorage to be undefined
  global.localStorage = undefined;
  
  const name = 'username';
  const item = 'JohnDoe';
  
  expect(setItem(name, item)).toBe(false);
});

// Test case 3: Empty name
test('setItem should set an item with an empty name', () => {
  const name = '';
  const item = 'JohnDoe';
  
  expect(setItem(name, item)).toBe(true);
  expect(localStorage.getItem(name)).toBe(item);
});

test('test', () => {
  expect(typeof window).not.toBe('undefined')
});
