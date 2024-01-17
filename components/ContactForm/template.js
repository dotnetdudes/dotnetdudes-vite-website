const ContactFormTemplate = /*html*/ `
<span id="homeform" class="home-form-container">
    <form action="" class="home-form" id="home-form" novalidate>
        <input id="email" name="email" placeholder="Please enter your email" type="email" class="home-input">
        <label for="email">Email</label>
        <textarea id="message" name="message" placeholder="How can we help" class="home-input"></textarea>
        <label for="message">Message</label>
        <button type="submit" id="submitButton">Send Message</button>
    </form>
    <div id="successPanel" data-testid="successPanel" class="success-panel">
        <img src="/icons/smile-beam.svg" alt="happy face icon" title="happy face icon" class="happy-face face-margin" />
        <h2>It looks like that worked out.</h2>
        <p>Thank you for your message.</p>
        <p>We will get to it as soon as we possibly can and get right back to you.</p>
        <p>Come back and chat again soon.</p>
        <button type="button" class="result-button">Go back to the form now.</button>
    </div>
    <div id="failurePanel" data-testid="failurePanel" class="failure-panel">
        <img src="/icons/sad-tear.svg" alt="sad face icon" title="sad face icon" class="sad-face face-margin" />
        <h2>It looks like that didn't work out.</h2>
        <p>Well that was dissapointing.</p>
        <p>Please don't hold it against us we're sure it's a temporary problem.</p>
        <p>Come back and try again soon.</p>
        <button type="button" class="result-button">Go back to the form and try again now.</button>
    </div>
</span>
`;

export default ContactFormTemplate;