import { useState } from 'react'
import './Header.css'

const navItems = [
  { label: 'Início', href: '#home' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Habilidades', href: '#habilidades' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Contato', href: '#contato' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleNavClick = () => {
    setMenuOpen(false)
  }

  return (
    <header className="navbar">
      <div className="logo">Jackson Gravino</div>

      <button
        className="menu-toggle"
        aria-label="Abrir Menu"
        onClick={() => setMenuOpen(prev => !prev)}
      >
        <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'}`}></i>
      </button>

      <nav className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <ul>
          {navItems.map(item => (
            <li key={item.href}>
              <a href={item.href} onClick={handleNavClick}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
