// <Footer></Footer>
import FooterTemplate from './template';

class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = FooterTemplate;
  }
  
}

window.customElements.define('page-footer', Footer);