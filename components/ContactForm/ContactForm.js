// <ContactForm></ContactForm>
import ContactFormTemplate from './template';
import dudesApi from '../../services/api';

class ContactForm extends HTMLElement {
    constructor() {
        super();
    }

    showForm(form) {
        const failurePanel = document.getElementById('failurePanel');
        const successPanel = document.getElementById('successPanel');
        failurePanel.style.display = 'none';
        successPanel.style.display = 'none';
        form.style.display = 'grid';
    }

    cleanFormFields(form) {
        let formFields = Array.from(form.elements).filter((tag) =>
            ['textarea', 'input'].includes(tag.tagName.toLowerCase())
        );
        formFields.forEach((field) => {
            if (field.value) field.classList.remove('form-error');
        });
    }

    validate(form) {
        let valid = false;
        const emailField = form.elements['email'];
        const messageField = form.elements['message'];
        const validEmail = this.validateEmail(emailField);
        const validMessage = this.validateMessage(messageField);
        if (validEmail && validMessage) valid = true;
        return valid;
    }

    validateEmail(emailField) {
        let validRequiredEmail = false;
        let validEmail = false;
        const label = document.querySelector('[for=' + emailField.id + ']');
        if (!emailField.value) {
            label.innerHTML = 'Email is a required field';
            emailField.classList.add('form-error');
        }
        if (emailField.value) {
            validRequiredEmail = true;
            validEmail = this.validateEmailFormat(emailField.value);
        }
        if (!validEmail && validRequiredEmail) {
            emailField.classList.add('form-error');
            label.innerHTML = 'Please enter a valid email address';
        }
        if (validEmail) { 
            emailField.classList.remove('form-error');
            label.innerHTML = "Email";
        }
        return validEmail;
    }

    validateEmailFormat(email) {
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
    }

    validateMessage(messageField) {
        let validMessage = false;
        const label = document.querySelector('[for=' + messageField.id + ']');
        if (messageField.value) validMessage = true;
        if (!validMessage) {
            messageField.classList.add('form-error');
            label.innerHTML = 'Please enter a message';
        }
        if (validMessage) {
            messageField.classList.remove('form-error');
            label.innerHTML = 'Message';
        }
        return validMessage;
    }

    // handle the submission to api
    async submitForm(form) {
        const emailField = form.elements['email'];
        const messageField = form.elements['message'];
        const formButton = form.elements['submitButton'];
        const failurePanel = document.getElementById('failurePanel');
        const successPanel = document.getElementById('successPanel');
        formButton.disabled = true;
        formButton.classList.add('button-loading');
        const contactInfo = {};
        contactInfo.Email = emailField.value;
        contactInfo.Message = messageField.value;
        console.log(contactInfo);
        dudesApi
            .postContactForm(contactInfo)
            .then((response) => {
                if (response.ok) {
                    console.log(response);
                    form.style.display = 'none';
                    successPanel.style.display = 'inline-block';
                } else {
                    console.log(response);
                    form.style.display = 'none';
                    failurePanel.style.display = 'inline-block';
                }
            })
            .catch((error) => {
                console.log(error);
                form.style.display = 'none';
                failurePanel.style.display = 'inline-block';
            })
            .finally(() => {
                formButton.disabled = false;
                formButton.classList.remove('button-loading');
            });
    }

    connectedCallback() {
        this.innerHTML = ContactFormTemplate;

        const form = document.getElementById('home-form');
        const emailField = form.elements['email'];
        const messageField = form.elements['message'];
        const buttons = document.querySelectorAll('.result-button');
        const validateForm = async () => this.validate(form);
        const validateFormEmail = async () => this.validateEmail(emailField);
        const validateFormMessage = () => this.validateMessage(messageField);
        const sendContactForm = async () => this.submitForm(form);
        const returnToForm = () => this.showForm(form);

        // add click event to result buttons
        buttons.forEach(button => {
            button.addEventListener('click', function handleClick(event) {
              returnToForm();
            });
          });

        // handle the form submission
        form.addEventListener('submit', async function (e) {
            e.preventDefault();
            const valid = await validateForm();
            if (!valid) return false;
            await sendContactForm();
        });

        // change event on email field
        emailField.addEventListener('change', async function (e) {
            const valid = await validateFormEmail(emailField);
            // console.log(valid);
        });

        // blur event on email field
        emailField.addEventListener('blur', async function (e) {
            const valid = await validateFormEmail(emailField);
            // console.log(valid);
        });

        // blur event on message field
        messageField.addEventListener('blur', function (e) {
            const valid = validateFormMessage(messageField);
            // console.log(valid);
        });
    }

    disconnectedCallback() {}

    attributeChangedCallback(attrName, oldVal, newVal) {}
}

window.customElements.define('contact-form', ContactForm);
