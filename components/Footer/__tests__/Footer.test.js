import { test, expect, describe } from "vitest";
import "../Footer.js";

describe("Footer", () => {
  test("Footer component should match current snapshot", () => {
    document.body.innerHTML = `<page-footer></page-footer>`;
    expect(document.body.innerHTML).toMatchSnapshot();
  });
});
