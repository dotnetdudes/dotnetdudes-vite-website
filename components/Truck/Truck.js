// <Truck></Truck>
import TruckTemplate from './template';

class Truck extends HTMLElement {
  constructor() {
    super(); // always call super() first in the ctor.
  }

  connectedCallback() {
    this.innerHTML = TruckTemplate;
  }

  disconnectedCallback() {
    //
  }
}

window.customElements.define('dudes-truck', Truck);