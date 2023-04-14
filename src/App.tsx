import React from 'react';
import './App.css';
import Stage from './sections/Stage/Stage';
import ImageWall from './sections/ImageWall/ImageWall';
import { useHandleResize } from './hooks/useHandleResize';

import assets from "./data/images.json"

function App() {
  return (
    <div className="App">
      <Stage large={assets.stage.large} small={assets.stage.small} />
      <ImageWall images={assets.imageWall} screenWidth={useHandleResize()} />
    </div>
  );
}

export default App;
