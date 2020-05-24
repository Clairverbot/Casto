import React from 'react';
import logo from './assets/icon/logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div style={{ fontWeight: 'bold', color: '#DBD56E', fontSize:64 }}>CASTO</div>
        <div>Learning languages made easy</div>
        <br/>
        <div className="row">
          <div className="col">
            <a className="waves-effect waves-light cyan btn-large">Learn Alone</a>
          </div>
          <div className="col">
            <a className="waves-effect waves-light green lighten-2 btn-large">Invite Friends</a>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
