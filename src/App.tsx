import React, { useState } from 'react';
import ViewMenu, { View } from './components/ViewMenu';
import Viewer from './components/Viewer';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('3d');

  return (
    <div>
      <ViewMenu currentView={currentView} onViewChange={setCurrentView} />
      <Viewer currentView={currentView} />
    </div>
  );
};

export default App;
