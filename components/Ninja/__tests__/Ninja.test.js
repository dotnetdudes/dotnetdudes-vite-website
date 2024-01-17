import { test, expect, describe } from "vitest";
import "../Ninja.js";

describe("Ninja static css", () => {
  test("should match the current snapshot", () => {
    document.body.innerHTML = `<css-ninja></css-ninja>`;
    expect(document.head.innerHTML).toMatchSnapshot();
  });
});
