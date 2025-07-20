import { LitElement, html } from "lit"

import "./sections/header-section"
import "./sections/projects-section"

export class Portfolio extends LitElement {
  render() {
    return html`
      <header-section></header-section>
      <projects-section></projects-section>
    `
  }
}
customElements.define("portfolio-main", Portfolio)