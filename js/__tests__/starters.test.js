import { describe, test, expect, beforeEach, afterEach, vi } from 'vitest';
import { onStarterLoaded } from '../starters.js';

describe('onStarterLoaded', () => {
  beforeEach(() => {
    vi.stubGlobal('window.open', vi.fn());
  });

  afterEach(() => {
    vi.clearAllMocks();
    vi.resetAllMocks();
  });

  test('should open React Starter link', () => {
    document.body.innerHTML = `
      <button id="reactStarter">React Starter</button>
      <button id="nativeStarter">React Native Starter</button>
    `;
    const btn = document.getElementById('reactStarter');
    const spy = vi.spyOn(window, 'open');

    onStarterLoaded();

    // Create the event.
    const event = document.createEvent('Event');

    // Define that the event name is 'DOMContentLoaded'.
    event.initEvent('DOMContentLoaded', true, true);

    window.document.dispatchEvent(event);

    btn.click();

    expect(spy).toHaveBeenCalledWith(
      'https://github.com/dotnetdudes/react-starter',
      '_blank',
    );
  });

  test('should open React Native Starter link', () => {
    document.body.innerHTML = `
      <button id="reactStarter">React Starter</button>
      <button id="nativeStarter">React Native Starter</button>
    `;
    const reactBtn = document.getElementById('nativeStarter');
    const spy = vi.spyOn(window, 'open');

    onStarterLoaded();

    // Create the event.
    const event = document.createEvent('Event');

    // Define that the event name is 'DOMContentLoaded'.
    event.initEvent('DOMContentLoaded', true, true);

    window.document.dispatchEvent(event);

    reactBtn.click();

    expect(spy).toHaveBeenCalledWith(
      'https://github.com/dotnetdudes/react-native-starter',
      '_blank',
    );
  });
});