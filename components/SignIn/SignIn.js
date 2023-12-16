import SignInTemplate from './template.js';
import Keycloak from 'keycloak-js';

const keycloak = new Keycloak({
    url: process.env.AUTH_SERVER_URL,
    realm: process.env.AUTH_SERVER_REALM,
    clientId: process.env.AUTH_SERVER_CLIENT_ID,
});

class SignIn extends HTMLElement {
    constructor() {
        super();
        // Add initialization code here
    }

    async signIn() {
        console.log('sign in');
        await keycloak.login();
    }

    async signOut() {
        console.log('sign out');
        await keycloak.logout();
    }

    async myAccount() {
        console.log('my account');
        await keycloak.accountManagement();
    }

    showSignOut() {
        const signInButtonContainer = document.getElementById(
            'signInButtonContainer'
        );
        signInButtonContainer.style.display = 'none';
        const signOutButtonContainer = document.getElementsByClassName(
            'signOutButtonContainer'
        );
        // signOutButtonContainer.style.display = 'inline-block';
        //[].map.call(elements, elem => elem.textContent);
        [].map.call(signOutButtonContainer, elem => {
            elem.style.display = 'inline-block';
        });
    }

    showSignIn() {
        const signInButtonContainer = document.getElementById(
            'signInButtonContainer'
        );
        signInButtonContainer.style.display = 'inline-block';
        const signOutButtonContainer = document.getElementsByClassName(
            'signOutButtonContainer'
        );
        // signOutButtonContainer.style.display = 'none';
        [].map.call(signOutButtonContainer, elem => {
            elem.style.display = 'none';
        });
    }

    async connectedCallback() {
        this.innerHTML = SignInTemplate;

        const login = async () => {
            this.signIn();
        };
        const logout = async () => {
            this.signOut();
        };
        const account = async () => {
            this.myAccount();
        };

        const signInButton = document.getElementById('signInButton');
        signInButton.addEventListener('click', login);
        const signOutButton = document.getElementById('signOutButton');
        signOutButton.addEventListener('click', logout);
        const myAccountButton = document.getElementById('myAccountButton');
        myAccountButton.addEventListener('click', account);

        try {
            const authenticated = await keycloak.init({
                checkLoginIframe: false,
                onLoad: 'check-sso',
                /*silentCheckSsoRedirectUri: `${location.origin}/silent-sso-check.html`,*/
            });
            if (authenticated) {
                this.showSignOut();
            } else {
                this.showSignIn();
            }
            console.log(
                `User is ${
                    authenticated ? 'authenticated' : 'not authenticated'
                }`
            );
            console.log(keycloak.token);
        } catch (error) {
            console.error('Failed to initialize adapter:', error);
        }
    }

    disconnectedCallback() {
        // Add code to run when the component is removed from the DOM
    }

    attributeChangedCallback(name, oldValue, newValue) {
        // Add code to react to attribute changes
    }

    // static get observedAttributes() {
    //     return ['attribute1', 'attribute2'];
    // }
}

customElements.define('sign-in', SignIn);
