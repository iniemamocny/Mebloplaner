import { useState } from 'react'
import './App.css'
import Viewer, { View } from './components/Viewer'

function App() {
  const views: View[] = ['3d', 'top', 'back', 'left', 'right']
  const [currentView, setCurrentView] = useState<View>('3d')

  return (
    <>
      <Viewer currentView={currentView} />
      <div className="view-controls">
        {views.map((view) => (
          <button key={view} onClick={() => setCurrentView(view)}>
            {view}
          </button>
        ))}
      </div>
    </>
  )
}

export default App
