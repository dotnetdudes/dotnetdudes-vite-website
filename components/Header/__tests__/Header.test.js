import { describe, expect, test } from 'vitest';
import '../Header.js';

describe('Header', () => {
  test('should match current snapshot', () => {
    document.body.innerHTML = `<page-header></page-header>`;
    expect(document.body.innerHTML).toMatchSnapshot();
  });
});
