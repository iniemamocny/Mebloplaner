import React from 'react';
import {
  mdiCubeOutline,
  mdiArrowUp,
  mdiArrowDown,
  mdiArrowLeft,
  mdiArrowRight,
} from '@mdi/js';

export type View = '3d' | 'top' | 'back' | 'left' | 'right';

interface ViewInfo {
  id: View;
  icon: string;
  title: string;
}

const views: ViewInfo[] = [
  { id: '3d', icon: mdiCubeOutline, title: '3D view' },
  { id: 'top', icon: mdiArrowUp, title: 'Top view' },
  { id: 'back', icon: mdiArrowDown, title: 'Back view' },
  { id: 'left', icon: mdiArrowLeft, title: 'Left view' },
  { id: 'right', icon: mdiArrowRight, title: 'Right view' },
];
interface ViewMenuProps {
  currentView: View;
  onViewChange: (view: View) => void;
}

export const ViewMenu: React.FC<ViewMenuProps> = ({ currentView, onViewChange }) => {
  return (
    <div className="view-menu">
      {views.map(({ id, icon, title }) => (
        <svg
          key={id}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          onClick={() => onViewChange(id)}
          style={{
            cursor: 'pointer',
            fill: currentView === id ? 'var(--primary)' : 'var(--muted)',
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
