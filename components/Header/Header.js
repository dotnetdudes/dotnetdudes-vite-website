// <Header></Header>
import HeaderTemplate from "./template";
import Keycloak from 'keycloak-js';

const keycloak = new Keycloak({
    url: import.meta.env.VITE_AUTH_SERVER_URL,
    realm: import.meta.env.VITE_AUTH_SERVER_REALM,
    clientId: import.meta.env.VITE_AUTH_SERVER_CLIENT_ID,    
});

class Header extends HTMLElement {
    constructor() {
        super();
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
        [].map.call(signOutButtonContainer, elem => {
            elem.style.display = 'none';
        });
    }

    async connectedCallback() {
        this.innerHTML = HeaderTemplate;

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
                silentCheckSsoRedirectUri: `${location.origin}/silent-sso-check.html`,
            });
            if (authenticated) {
                this.showSignOut();
            } else {
                this.showSignIn();
            }
        } catch (error) {
            console.error('Failed to initialize adapter:', error);
        }
        // tbd: move to ready.js and call from here
        const pnl = document.getElementById('loadingpanel');
        // console.log(pnl);
        pnl.style.display = 'none';
    }
    disconnectedCallback() {
        //
    }
    attributeChangedCallback(attrName, oldVal, newVal) {
        //
    }
}

window.customElements.define('page-header', Header);