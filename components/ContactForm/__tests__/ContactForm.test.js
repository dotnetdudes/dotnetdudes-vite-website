import { describe, test, expect } from "vitest";
import {
  getByLabelText,
  getByText,
  getByTestId,
  waitFor,
} from "@testing-library/dom";
import MockAdapter from "axios-mock-adapter";
import apiManager from "../../../services/apiManager";
import "../ContactForm";

describe("Contact Form", () => {

  describe("Contact Form submission", () => {

    test("should render success message", async () => {
      document.body.innerHTML = `
        <contact-form></contact-form>
      `;

      const form = document.querySelector("form");
      const emailInput = getByLabelText(form, "Email");
      const messageInput = getByLabelText(form, "Message");
      const submitButton = getByText(form, "Send Message");

      messageInput.value = "Dummy message";
      emailInput.value = "john@test.com";

      const mock = new MockAdapter(apiManager.getInstance().axiosInstance);
      mock.onPost("/contactform").reply(200, {
        ok: true,
      });

      submitButton.click();

      await waitFor(() => {
        expect(getByTestId(document.body, "successPanel")).toBeTruthy();
      });
    });

    // test validation
    test("should render Message required", async () => {
      document.body.innerHTML = `
        <contact-form></contact-form>
      `;

      const form = document.querySelector("form");
      const emailInput = getByLabelText(form, "Email");
      const messageInput = getByLabelText(form, "Message");
      const submitButton = getByText(form, "Send Message");

      messageInput.value = "";
      emailInput.value = "john@test.com";

      submitButton.click();

      await waitFor(() => {
        expect(
          getByLabelText(document.body, "Please enter a message")
        ).toBeTruthy();
      });
    });

    test("should render Email required", async () => {
      document.body.innerHTML = `
        <contact-form></contact-form>
      `;

      const form = document.querySelector("form");
      const emailInput = getByLabelText(form, "Email");
      const messageInput = getByLabelText(form, "Message");
      const submitButton = getByText(form, "Send Message");

      messageInput.value = "Dummy message";
      emailInput.value = "";

      submitButton.click();

      await waitFor(() => {
        expect(
          getByLabelText(document.body, "Email is a required field")
        ).toBeTruthy();
      });
    });

    test("should render Email invalid", async () => {
      document.body.innerHTML = `
        <contact-form></contact-form>
      `;

      const form = document.querySelector("form");
      const emailInput = getByLabelText(form, "Email");
      const messageInput = getByLabelText(form, "Message");
      const submitButton = getByText(form, "Send Message");

      messageInput.value = "Dummy message";
      emailInput.value = "john";

      submitButton.click();

      await waitFor(() => {
        expect(
          getByLabelText(document.body, "Please enter a valid email address")
        ).toBeTruthy();
      });
    });
  });
});
