import './components/Hero'
import './components/List'

const hero1 = document.createElement('custom-hero')
hero1.innerHTML = `
  <div slot="hero-content">
    <h1>Hello, World!</h1>
    <p>Rendered with a Web Component!</p>
    <p>Using connectedCallback() to invoke render()</p>
  </div>
`
document.body.appendChild(hero1)

document.body.appendChild(document.createElement('custom-list'))

const hero2 = document.createElement('custom-hero')
hero2.innerHTML = `
  <div slot="hero-content">
    <h1>Reused Component</h1>
    <p>Uses different slotted data</p>
  </div>
`
document.body.appendChild(hero2)