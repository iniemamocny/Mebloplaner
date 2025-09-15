import { useState } from 'react'
import './App.css'
import TopMenu from './components/TopMenu'
import ViewMenu from './components/ViewMenu'
import Viewer, { View } from './components/Viewer'

function App() {
  const [activeTab, setActiveTab] = useState('szafki')
  const [currentView, setCurrentView] = useState<View>('3d')

  return (
    <div className="app">
      <TopMenu activeTab={activeTab} setActiveTab={setActiveTab} />
      <ViewMenu currentView={currentView} setCurrentView={setCurrentView} />
      <div className="viewer">
        <Viewer currentView={currentView} />
      </div>
    </div>
  )
}

export default App
