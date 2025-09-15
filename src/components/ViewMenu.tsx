import React, { useState } from 'react';
import { mdiViewGrid, mdiViewAgenda, mdiCubeOutline } from '@mdi/js';

export type View = 'grid' | 'list' | '3d';

interface ViewInfo {
  id: View;
  icon: string;
  title: string;
}

const views: ViewInfo[] = [
  { id: 'grid', icon: mdiViewGrid, title: 'Grid view' },
  { id: 'list', icon: mdiViewAgenda, title: 'List view' },
  { id: '3d', icon: mdiCubeOutline, title: '3D view' },
];

export const ViewMenu: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('grid');

  return (
    <div style={{ display: 'flex', gap: '0.5rem' }}>
      {views.map(({ id, icon, title }) => (
        <svg
          key={id}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          onClick={() => setCurrentView(id)}
          style={{
            cursor: 'pointer',
            fill: currentView === id ? '#1976d2' : '#777',
          }}
        >
          <title>{title}</title>
          <path d={icon} />
        </svg>
      ))}
    </div>
  );
};

export default ViewMenu;
