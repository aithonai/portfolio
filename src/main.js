import { LitElement, html } from "lit"
import "./sections/header-section"
import "./sections/projects-section"

export class MainContent extends LitElement {
  render() {
    return html`
      <header-section></header-section>
      <projects-section></projects-section>
    `
  }
}
customElements.define("main-content", MainContent)