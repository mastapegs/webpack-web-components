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
    const template = document.createElement('template')
    template.innerHTML = heroTemplate
    this.shadowRoot.appendChild(template.content.cloneNode(true))
    console.log(template)
  }

}

customElements.define('custom-hero', Hero)