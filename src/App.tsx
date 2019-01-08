import React, { Component } from 'react';
import { MediaControls } from './components/media-controls';
import './App.scss';

class App extends Component {
  render() {
    return (
      <main className="App">
        <header className="App-header">
          <MediaControls />
        </header>
      </main>
    );
  }
}

export default App;
