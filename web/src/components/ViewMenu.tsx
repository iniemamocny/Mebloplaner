import { useState } from 'react'
import './ViewMenu.css'

import view3dIcon from '../assets/view-3d.svg'
import topIcon from '../assets/top-view.svg'
import backIcon from '../assets/back-view.svg'
import leftIcon from '../assets/left-view.svg'
import rightIcon from '../assets/right-view.svg'

const views = [
  { id: '3d', label: 'widok 3D', icon: view3dIcon },
  { id: 'top', label: 'rzut z góry 2D', icon: topIcon },
  { id: 'back', label: 'rzut z tyłu 2D', icon: backIcon },
  { id: 'left', label: 'rzut z lewego boku 2D', icon: leftIcon },
  { id: 'right', label: 'rzut z prawego boku 2D', icon: rightIcon },
]

export default function ViewMenu() {
  const [active, setActive] = useState('3d')

  return (
    <nav className="view-menu">
      {views.map((view) => (
        <button
          key={view.id}
          className={`view-button ${active === view.id ? 'active' : ''}`}
          onClick={() => setActive(view.id)}
        >
          <img src={view.icon} alt={view.label} />
        </button>
      ))}
    </nav>
  )
}
