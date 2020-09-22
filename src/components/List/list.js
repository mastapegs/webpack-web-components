import styles from './list.css'

class List extends HTMLElement {

  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }

  connectedCallback() {
    this.render()
  }

  render() {
    this.renderStyles()
    this.renderList()
  }

  renderStyles() {
    const styleTag = document.createElement('style')
    styleTag.textContent = styles.toString()
    this.shadowRoot.appendChild(styleTag)
  }

  renderList() {
    const listFragment = document.createDocumentFragment()
    const ul = document.createElement('ul')
    
    const data = ['One', 'Two', 'Three', 'Four', 'Five']
    data.forEach(item => {
      const li = document.createElement('li')
      li.appendChild(document.createTextNode(item))
      ul.appendChild(li)
    })

    listFragment.appendChild(ul)
    this.shadowRoot.appendChild(listFragment)
  }

}

customElements.define('custom-list', List)