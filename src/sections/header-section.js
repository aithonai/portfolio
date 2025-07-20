import { LitElement, html, css } from "lit"

const headerStyles = css`
  header {
    text-align: center;
    border-bottom: 1px solid #ccc;
    text-align: left;
  }

  h1 {
    color: #333;
    font-size: 2.5em;
    margin: 0;
    margin-bottom: 1rem;
  }

  .quote {
    color: #333;
    margin: 0;
    font-style: italic;
    margin-bottom: 0.3rem;
  }

  .description {
    font-size: 0.8rem;
    font-weight: 600;
    color: #333;
    margin: 0;
  }
`

export class Header extends LitElement {
  static styles = headerStyles
  
  static properties = {
    _count: { type: Number }
  }
  
  constructor() {
    super()
    this._count = 0
  }

  render() {
    return html`
      <header>
        <h1>Aithonai</h1>
        <p class="quote">"Valoro mucho las máquinas, su complejidad y ayuda <br> aumentó mi pensamiento, ahora soy mejor que antes"</ p>
        <p class="description">AI Student | JavaScript | Python | Web Programmer </p>
      </header>
    `
  }
}

customElements.define("header-section", Header)