import { test, expect } from "vitest";
import "../ContactInfo.js";

// snapshot test
test("should match current snapshot", () => {
  document.body.innerHTML = `<contact-info></contact-info>`;
  expect(document.body.innerHTML).toMatchSnapshot();
});
