import { useState } from 'react'
import './TopMenu.css'

const tabs = [
  { id: 'szafki', label: 'Szafki' },
  { id: 'pomieszczenie', label: 'Pomieszczenie' },
  { id: 'koszt', label: 'Koszt' },
  { id: 'formatki', label: 'Formatki' },
]

export default function TopMenu() {
  const [active, setActive] = useState('szafki')

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
