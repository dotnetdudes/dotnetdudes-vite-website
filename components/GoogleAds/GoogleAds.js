// <GoogleAds></GoogleAds>
import GoogleAdsTemplate from "./template";

class GoogleAds extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = GoogleAdsTemplate;
  }
  disconnectedCallback() {
    //
  }
  attributeChangedCallback(attrName, oldVal, newVal) {
    //
  }
}

window.customElements.define('google-ads', GoogleAds);