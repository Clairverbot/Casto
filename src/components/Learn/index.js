import React from 'react'
import Nav from '../Nav'
import thumbnail from '../../assets/videos/patrick-thumbnail.jpg';
import ReactPlayer from 'react-player'
import { Link } from "react-router-dom";
export default function Learn() {
  return (
    <div>
      <Nav />
      <br />
      <div className="container">
        <div className="center-aligned row">
          <div className="col s4"></div>
          <div className="col s4">
            <p className="white-text">
              You'll be Patrick! Learn how to be patrick:
            </p>
          </div>
          <div className="col s4"></div>

        </div>
        <div className="center-align row">
          <div className="col s2"></div>
          <div className="col s8">
            <ReactPlayer className='' url='https://www.youtube.com/watch?v=rMog3TXQRds' />
          </div>
          <div className="col s2"></div>
        </div>
        <div className="center-align row">
          <Link to='/practice' className="waves-effect waves-light cyan btn-large">I'm Ready!</Link>
        </div>
        {/*
      mute 
      <ReactPlayer url='https://youtu.be/Vd-CYZ6Sf20' /> */}
      </div>
    </div>
  )
}
