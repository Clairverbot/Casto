import React, { Component } from 'react'
import Nav from '../Nav'
import thumbnail from '../../assets/videos/patrick-thumbnail.jpg';
import { useHistory } from "react-router-dom";


export default function ChooseVideo() {
  let history = useHistory();
  return (
    <div>
      <Nav />
      <br />
      <div className="container">
        <h5 className="center-align white-text">Select Video</h5>
        <br />
        <div className="center-align row">
          <div className="col s12">
            <input type="text" placeholder='Search ...' />
          </div>
        </div>
        <div className="center-align row" >
          <div className="col s4">
          <div className="card" onClick={e=>alert('Coming Soon!')}>
              <div className="card-image waves-effect waves-block waves-light ">
                <img src={require('../../assets/videos/nani.jpg')} />
              </div>
              <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">TED Talk - 8 secrets of success</span>
              </div>
            </div>
          </div>
          <div className="col s4">
            <div className="card" onClick={e => history.push('/learn')}>
              <div className="card-image waves-effect waves-block waves-light ">
                <img src={thumbnail} />
              </div>
              <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">Spongebob - No this is Patrick</span>
              </div>
            </div>
          </div>
          <div className="col s4">
            <div className="card" onClick={e => alert('Coming Soon!')}>
              <div className="card-image waves-effect waves-block waves-light ">
                <img src={require('../../assets/videos/sheldon.jpg')} />
              </div>
              <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">The Big Bang Theory - Pictionary</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

