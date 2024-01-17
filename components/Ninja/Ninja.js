import NinjaTemplate from "./template";

// <Ninja></Ninja>
class Ninja extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = NinjaTemplate;
  }

  disconnectedCallback() {
    //
  }
  
}

window.customElements.define('css-ninja', Ninja);