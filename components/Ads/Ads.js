import AdsTemplate from "./template";

// <Ads></Ads>
class Ads extends HTMLElement {
  constructor() {
    super();
  }
  
  connectedCallback() {
    this.innerHTML = AdsTemplate;
  }

}

window.customElements.define('dudes-ads', Ads);