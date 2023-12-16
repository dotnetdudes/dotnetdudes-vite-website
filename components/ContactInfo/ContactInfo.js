// <ContactInfo></ContactInfo>
import ContactInfoTemplate from './template';

class ContactInfo extends HTMLElement {
    constructor() {
        super();
    }
    encMail = 'am9obkBkb3RuZXRkdWRlcy5jb20=';

    getEmail() {
        return atob(this.encMail);
    }

    sendEmail() {
        console.log('send');
        const email = this.getEmail();
        // window.open(`mailto:${email}?subject=Dudes%20Contact%20Form`, "mailer", "", false);
        document.location.href = `mailto:${email}?subject=Dudes%20Contact%20Form`;
        // return false;
    }

    callDudes() {
        document.location.href = `tel:+61402888801`;
    }

    dudesGithub() {
        window.open('https://github.com/dotnetdudes', '_blank');
    }

    dudesLInkedIn() {
        window.open(
            'https://www.linkedin.com/company/3506154/admin/feed/posts/',
            '_blank'
        );
    }

    connectedCallback() {
        this.innerHTML = ContactInfoTemplate;

        const sendMessage = () => this.sendEmail();
        const phoneDudes = () => this.callDudes();
        const gotoGithub = () => this.dudesGithub();
        const gotoLinkedin = () => this.dudesLInkedIn();

        const email = this.getEmail();
        const emailInfo = document.getElementById('email-item');
        emailInfo.innerText = email;
        // click event on email field
        emailInfo.addEventListener('click', function (e) {
            sendMessage();
        });

        const mobileInfo = document.getElementById('mobile-item');
        mobileInfo.addEventListener('click', function (e) {
            phoneDudes();
        });

        const githubInfo = document.getElementById('github-item');
        githubInfo.addEventListener('click', function (e) {
            gotoGithub();
        });

        const linkedinInfo = document.getElementById('linkedin-item');
        linkedinInfo.addEventListener('click', function (e) {
            gotoLinkedin();
        });
    }
    disconnectedCallback() {
        //
    }
    attributeChangedCallback(attrName, oldVal, newVal) {
        //
    }
}

window.customElements.define('contact-info', ContactInfo);
