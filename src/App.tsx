import React, { useState } from 'react';
import ViewMenu, { View } from './components/ViewMenu';
import Viewer from './components/Viewer';
import './App.css';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('3d');
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
      <button
        className="hamburger"
        onClick={() => setMenuOpen((open) => !open)}
        aria-label="Toggle menu"
      >
        ☰
      </button>
      <nav className={`app-menu ${menuOpen ? 'open' : ''}`}>
        <ViewMenu currentView={currentView} onViewChange={setCurrentView} />
      </nav>
      <main className="app-board">
        <Viewer currentView={currentView} />
      </main>
    </div>
  );
};

export default App;
