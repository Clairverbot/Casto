import React, { Component } from 'react'
import Nav from '../Nav'
import english from '../../assets/LanguageIcon/en.png';
import chinese from '../../assets/LanguageIcon/cn.png';
import malay from '../../assets/LanguageIcon/my.png';
import { useHistory } from "react-router-dom";

export default function SelectLanguage() {
  const history = useHistory();
  return (
    <div>
      <Nav />
      <br/>
      <div className="container">
        <h5 className="center-align white-text">Select Language</h5>
        <br />
        <div className="center-align row" >
          <div className="col s4">
            <div className="card" onClick={e=>alert('Coming soon!')}>
              <div className="card-image waves-effect waves-block waves-light " style={{ width: '30%', margin: 'auto', paddingTop: 12 }}>
                <img src={chinese} />
              </div>
              <div class="card-content">
                <span class="card-title activator grey-text text-darken-4">Chinese (CN)</span>
              </div>
            </div>
          </div>
          <div className="col s4">
            <div className="card" onClick={e=>history.push('/chooseVideo')}>
              <div className="card-image waves-effect waves-block waves-light " style={{ width: '30%', margin: 'auto', paddingTop: 12 }}>
                <img src={english} />
              </div>
              <div class="card-content">
                <span class="card-title activator grey-text text-darken-4">English (UK)</span>
              </div>
            </div>
          </div>
          <div className="col s4">
            <div className="card" onClick={e=>alert('Coming soon!')}>
              <div className="card-image waves-effect waves-block waves-light " style={{ width: '30%', margin: 'auto', paddingTop: 12 }}>
                <img src={malay} />
              </div>
              <div class="card-content">
                <span class="card-title activator grey-text text-darken-4">Malay (MY)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

