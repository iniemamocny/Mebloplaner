import './ViewMenu.css'

import view3dIcon from '../assets/view-3d.svg'
import topIcon from '../assets/top-view.svg'
import backIcon from '../assets/back-view.svg'
import leftIcon from '../assets/left-view.svg'
import rightIcon from '../assets/right-view.svg'

import { View } from './Viewer'

const views: { id: View; label: string; icon: string }[] = [
  { id: '3d', label: 'widok 3D', icon: view3dIcon },
  { id: 'top', label: 'rzut z góry 2D', icon: topIcon },
  { id: 'back', label: 'rzut z tyłu 2D', icon: backIcon },
  { id: 'left', label: 'rzut z lewego boku 2D', icon: leftIcon },
  { id: 'right', label: 'rzut z prawego boku 2D', icon: rightIcon },
]

interface ViewMenuProps {
  currentView: View
  setCurrentView: (view: View) => void
}

export default function ViewMenu({ currentView, setCurrentView }: ViewMenuProps) {
  return (
    <nav className="view-menu">
      {views.map((view) => (
        <button
          key={view.id}
          className={`view-button ${currentView === view.id ? 'active' : ''}`}
          onClick={() => setCurrentView(view.id)}
        >
          <img src={view.icon} alt={view.label} />
        </button>
      ))}
    </nav>
  )
}
