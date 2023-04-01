import React from 'react';
import './App.css';
import Stage from './components/stage/Stage';

import assets from "./data/images.json"

function App() {
  return (
    <div className="App">
      <Stage large={assets.stage.large} small={assets.stage.small} />
    </div>
  );
}

export default App;
