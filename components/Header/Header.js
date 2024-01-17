// <Header></Header>
import Keycloak from 'keycloak-js';
import HeaderTemplate from "./template";
import { onSiteLoaded } from "../../js/ready";

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
        await keycloak.login();
    }

    async signOut() {
        await keycloak.logout();
    }

    async myAccount() {
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
            // console.log('authenticated:', authenticated);
            // console.log('token:', keycloak.token);
            if (authenticated) {
                this.showSignOut();
            } else {
                this.showSignIn();
            }
        } catch (error) {
            // eslint-disable-next-line no-console
            console.error('Failed to initialize adapter:', error);
        }
        onSiteLoaded();
        
    }
}

window.customElements.define('page-header', Header);