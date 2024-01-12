import AdsTemplate from "./template";

// <Ads></Ads>
class Ads extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = AdsTemplate;
  }
  disconnectedCallback() {
    //
  }
  attributeChangedCallback(attrName, oldVal, newVal) {
    //
  }
}

window.customElements.define('dudes-ads', Ads);