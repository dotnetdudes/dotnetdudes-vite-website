import { describe, test, expect, beforeEach, afterEach, vi } from 'vitest';
import { screen } from '@testing-library/dom';
import '../ContactInfo.js';

describe('ContactInfo', () => {
  beforeEach(() => {
    vi.stubGlobal('open', vi.fn());
  });

  afterEach(() => {
    vi.clearAllMocks();
    vi.resetAllMocks();
  });

  // snapshot test
  test('should match current snapshot', () => {
    document.body.innerHTML = `<contact-info></contact-info>`;
    expect(document.body.innerHTML).toMatchSnapshot();
  });

  test('should decode and render email', () => {
    document.body.innerHTML = `<contact-info></contact-info>`;
    const email = document.getElementById('email-item');
    expect(email.innerText).toBe('john@dotnetdudes.com');
  });

  test('should open Github link', () => {
    document.body.innerHTML = `<contact-info></contact-info>`;
    const spy = vi.spyOn(window, 'open');
    const github = screen.getByText('Github');

    github.click();

    expect(spy).toHaveBeenCalledWith(
      'https://github.com/dotnetdudes',
      '_blank',
    );
  });

  test('should open LinkedIn link', () => {
    document.body.innerHTML = `<contact-info></contact-info>`;
    const spy = vi.spyOn(window, 'open');
    const linkedin = screen.getByText('LinkedIn');

    linkedin.click();

    expect(spy).toHaveBeenCalledWith(
      'https://www.linkedin.com/company/3506154/admin/feed/posts/',
      '_blank',
    );
  });

  test('should open email link', () => {
    document.body.innerHTML = `<contact-info></contact-info>`;
    const spy = vi.spyOn(window, 'location', 'set');
    const email = screen.getByText('Email');

    email.click();

    expect(spy).toHaveBeenCalledWith(
      'mailto:john@dotnetdudes.com?subject=Dudes%20Contact%20Form',
    );
  });

  test('should open phone link', () => {
    document.body.innerHTML = `<contact-info></contact-info>`;
    const spy = vi.spyOn(window, 'location', 'set');
    const phone = screen.getByText('+61 402 888 801');

    phone.click();

    expect(spy).toHaveBeenCalledWith('tel:+61402888801');
  });
});
