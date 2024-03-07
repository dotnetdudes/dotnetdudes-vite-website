import { describe, test, expect, beforeEach, afterEach, vi } from 'vitest';
import { getInitialTheme } from '../theme.js';

describe('getInitialTheme', () => {
  beforeEach(() => {
    vi.stubGlobal('window.matchMedia', vi.fn());
    vi.stubGlobal('getItem', vi.fn());
  });

  afterEach(() => {
    vi.clearAllMocks();
    vi.resetAllMocks();
  });

  test('should return "dark" if isDarkMode returns true', () => {
    vi.spyOn(window, 'matchMedia').mockReturnValue(true);

    const initialTheme = getInitialTheme();

    expect(initialTheme).toBe('dark');
  });

  test('should return "light" if isDarkMode returns false and no theme is stored', () => {
    vi.spyOn(window, 'matchMedia').mockReturnValue(true);
    vi.spyOn(window, 'getItem').mockReturnValue(null);

    const initialTheme = getInitialTheme();

    expect(initialTheme).toBe('light');
  });

  test('should return stored theme if isDarkMode returns false and theme is stored', () => {
    vi.spyOn(window, 'matchMedia').mockReturnValue(false);
    vi.spyOn(window, 'getItem').mockReturnValue('dark');

    const initialTheme = getInitialTheme();

    expect(initialTheme).toBe('dark');
  });
});