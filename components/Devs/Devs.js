// <Devs></Devs>
import DevsTemplate from './template';

class Devs extends HTMLElement {
  constructor() {
    super(); // always call super() first in the ctor.
  }
  connectedCallback() {
    this.innerHTML = DevsTemplate;
  }
  disconnectedCallback() {
    //
  }
  attributeChangedCallback(attrName, oldVal, newVal) {
    //
  }
}

window.customElements.define('dude-devs', Devs);