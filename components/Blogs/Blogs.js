import BlogsTemplate from "./template";

// <Blogs></Blogs>
class Blogs extends HTMLElement {
  #items;

  constructor() {
    super();
    this.#items = [];
    //
  }

  set items(value) {
    this.#items = value;
  }
  
  get items() {
    return this.#items;
  }

  connectedCallback() {
    this.innerHTML = BlogsTemplate;
  }
}

window.customElements.define('dudes-blogs', Blogs);