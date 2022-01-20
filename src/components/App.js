import React from 'react';
import Header from './Header';
import '../../src/App.css';

function App() {
  return (
    <div className="App">
      <div className='header'>
        <Header />
      </div>
      <div className='title'>
        <h1>Ready for Waifus?</h1>
        <h4>Choose your Type to get Started</h4>
      </div>
      <div classname='buttons'>
      <button className='maid'>Maid</button>
      <button className='waifu'>Waifu</button>
      </div>
    </div>
  );
}

export default App;