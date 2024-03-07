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
        const email = this.getEmail();
        window.location = `mailto:${email}?subject=Dudes%20Contact%20Form`;
    }

    callDudes() {
        window.location = `tel:+61402888801`;
    }

    dudesGithub() {
        window.open('https://github.com/dotnetdudes', '_blank');
    }

    dudesLinkedIn() {
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
        const gotoLinkedin = () => this.dudesLinkedIn();

        const email = this.getEmail();
        const emailInfo = document.getElementById('email-item');
        emailInfo.innerText = email;
        // click event on email field
        emailInfo.addEventListener('click', () => {
            sendMessage();
        });

        const mobileInfo = document.getElementById('mobile-item');
        mobileInfo.addEventListener('click', () => {
            phoneDudes();
        });

        const githubInfo = document.getElementById('github-item');
        githubInfo.addEventListener('click', () => {
            gotoGithub();
        });

        const linkedinInfo = document.getElementById('linkedin-item');
        linkedinInfo.addEventListener('click', () => {
            gotoLinkedin();
        });
    }
}

window.customElements.define('contact-info', ContactInfo);
