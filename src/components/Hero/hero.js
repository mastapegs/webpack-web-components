import styles from './hero.css'
import heroTemplate from './heroTemplate.html'

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
    styleTag.textContent = styles
    this.shadowRoot.appendChild(styleTag)
  }

  renderContent() {
    const renderTag = document.createElement('div')
    renderTag.className = "container"
    renderTag.innerHTML = heroTemplate
    this.shadowRoot.appendChild(renderTag)
  }

}

customElements.define('custom-hero', Hero)