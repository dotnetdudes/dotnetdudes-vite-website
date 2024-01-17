import { describe, test, expect } from "vitest";
import ContactInfoTemplate from "../template.js";

describe("Contact Info static content", () => {
  // Test case 1: Verify that the template renders correctly
  test("should render the contact info items", () => {
    document.body.innerHTML = ContactInfoTemplate;
    const contactInfoItems = document.querySelectorAll(".contact-info-item");
    expect(contactInfoItems.length).toBe(6);
  });

  // Test case 2: Verify that the email item is rendered correctly
  test("should render the email item", () => {
    document.body.innerHTML = ContactInfoTemplate;
    const emailItem = document.getElementById("email-item");
    expect(emailItem.textContent).toBe("Email");
  });

  // Test case 3: Verify that the mobile item is rendered correctly
  test("should render the mobile item", () => {
    document.body.innerHTML = ContactInfoTemplate;
    const mobileItem = document.getElementById("mobile-item");
    expect(mobileItem.textContent).toBe("+61 402 888 801");
  });

  // Test case 4: Verify that the github item is rendered correctly
  test("should render the github item", () => {
    document.body.innerHTML = ContactInfoTemplate;
    const githubItem = document.getElementById("github-item");
    expect(githubItem.textContent).toBe("Github");
  });

  // Test case 5: Verify that the linkedin item is rendered correctly
  test("should render the linkedin item", () => {
    document.body.innerHTML = ContactInfoTemplate;
    const linkedinItem = document.getElementById("linkedin-item");
    expect(linkedinItem.textContent).toBe("LinkedIn");
  });

  // Test case 6: Verify that the facebook item is rendered correctly
  test("should render the facebook item", () => {
    document.body.innerHTML = ContactInfoTemplate;
    const facebookItem = document.getElementById("facebook-item");
    expect(facebookItem.textContent).toBe("facebook");
  });

  // Test case 7: Verify that the twitter item is rendered correctly
  test("should render the twitter item", () => {
    document.body.innerHTML = ContactInfoTemplate;
    const twitterItem = document.getElementById("twitter-item");
    expect(twitterItem.textContent).toBe("Twitter");
  });
});
