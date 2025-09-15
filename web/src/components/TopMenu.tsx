import { useState } from 'react'
import './TopMenu.css'

const tabs = [
  { id: 'home', label: 'Home' },
  { id: 'projects', label: 'Projects' },
  { id: 'about', label: 'About' },
]

export default function TopMenu() {
  const [active, setActive] = useState('home')

  return (
    <nav className="top-menu">
      {tabs.map((tab) => (
        <a
          key={tab.id}
          href="#"
          className={`menu-link ${active === tab.id ? 'active' : ''}`}
          onClick={(e) => {
            e.preventDefault()
            setActive(tab.id)
          }}
        >
          {tab.label}
        </a>
      ))}
    </nav>
  )
}
