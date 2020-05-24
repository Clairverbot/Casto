import React from 'react';
import logo from '../../assets/logo.png';
import './index.css'
import { Link } from "react-router-dom";
function Landing() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div style={{ fontWeight: 'bold', color: '#DBD56E', fontSize: 64 }}>CASTO</div>
        <div>Learning languages made easy</div>
        <br />
        <div className="row">
          <div className="col">
            <Link to='/selectLanguage' className="waves-effect waves-light cyan btn-large">Learn Alone</Link>
          </div>
          <div className="col">
            <div className="waves-effect waves-light green lighten-2 btn-large" onClick={e => alert('Coming Soon!')}>Invite Friends</div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Landing;
