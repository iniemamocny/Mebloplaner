import React from 'react';
import type { View } from './ViewMenu';

interface ViewerProps {
  currentView: View;
}

const Viewer: React.FC<ViewerProps> = ({ currentView }) => {
  switch (currentView) {
    case '3d':
      return <canvas data-testid="view-3d" />;
    case 'top':
      return <div data-testid="view-top">Top view placeholder</div>;
    case 'back':
      return <div data-testid="view-back">Back view placeholder</div>;
    case 'left':
      return <div data-testid="view-left">Left view placeholder</div>;
    case 'right':
      return <div data-testid="view-right">Right view placeholder</div>;
    default:
      return null;
  }
};

export default Viewer;
