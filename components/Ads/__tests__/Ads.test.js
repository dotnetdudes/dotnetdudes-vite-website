import { describe, test, expect } from "vitest";
// eslint-disable-next-line no-unused-vars
import Ads from "../Ads.js";

describe("Ads static component", () => {
  // Test case 1: Verify that the component renders correctly
  test("Ads component should render the AdsTemplate", () => {
    document.body.innerHTML = `<dudes-ads></dudes-ads>`;
    expect(document.body.innerHTML).toContain("dotnetdudes");
  });
  
  // Test case 2: Verify that the component renders correctly
  test("Ads component should contain text React", () => {
    document.body.innerHTML = `<dudes-ads></dudes-ads>`;
    expect(document.body.innerHTML).toContain("React");
  });
  
  // Test case 3: Verify that the component renders correctly
  test("Ads component should contain text React Native", () => {
    document.body.innerHTML = `<dudes-ads></dudes-ads>`;
    expect(document.body.innerHTML).toContain("React Native");
  });
  
  // snapshot testing
  test("Ads component should match current snaapshot", () => {
    document.body.innerHTML = `<dudes-ads></dudes-ads>`;
    expect(document.body.innerHTML).toMatchSnapshot();
  });
});