import { LitElement, html, css } from "lit"

const componentStyles = css``

export class Projects extends LitElement {
  static styles = componentStyles

  render() {
    return html`
      <section>
        <h2>Projects</h2>
        <ul>
          <li>Project 1</li>
          <li>Project 2</li>
        </ul>
      </section>
    `
  }
}
customElements.define("projects-section", Projects)