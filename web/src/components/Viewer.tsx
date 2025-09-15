import React from 'react'

export type View = '3d' | 'top' | 'back' | 'left' | 'right'

interface ViewerProps {
  currentView: View
}

export default function Viewer({ currentView }: ViewerProps) {
  switch (currentView) {
    case '3d':
      return <canvas data-testid="view-3d">3D view placeholder</canvas>
    case 'top':
      return <div data-testid="view-top">Top view placeholder</div>
    case 'back':
      return <div data-testid="view-back">Back view placeholder</div>
    case 'left':
      return <div data-testid="view-left">Left view placeholder</div>
    case 'right':
      return <div data-testid="view-right">Right view placeholder</div>
    default:
      return null
  }
}
