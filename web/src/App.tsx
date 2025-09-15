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
      <div className="content">
        {activeTab === 'szafki' ? (
          <>
            <ViewMenu
              currentView={currentView}
              setCurrentView={setCurrentView}
            />
            <div className="viewer">
              <Viewer currentView={currentView} />
            </div>
          </>
        ) : (
          <div className="tab-placeholder">
            {activeTab === 'pomieszczenie' && 'Sekcja "Pomieszczenie" w przygotowaniu'}
            {activeTab === 'koszt' && 'Sekcja "Koszt" w przygotowaniu'}
            {activeTab === 'formatki' && 'Sekcja "Formatki" w przygotowaniu'}
          </div>
        )}
      </div>
    </div>
  )
}

export default App
