import styles from './hero.css'

class Hero extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: "open" })
  }

  connectedCallback() {
    this.render()
  }

  render() {
    this.renderStyles()
    this.renderContent()
  }

  renderStyles() {
    const styleTag = document.createElement('style')
    styleTag.textContent = styles.toString()
    this.shadowRoot.appendChild(styleTag)
  }

  renderContent() {
    const renderTag = document.createElement('div')
    renderTag.innerHTML = `
      <div>
        <h1>Hello, World!</h1>
        <p>Rendered with a Web Component!</p>
        <p>Using connectedCallback() to invoke render()</p>
      </div>
    `
    this.shadowRoot.appendChild(renderTag)
  }

}

customElements.define('custom-hero', Hero)