import React from 'react'
import Nav from '../Nav'
import { Link } from "react-router-dom";
import ReactPlayer from 'react-player'
const recognition = new window.webkitSpeechRecognition()

recognition.continous = true
recognition.interimResults = true
recognition.lang = 'en-US'

export default class Practice extends React.Component {
  constructor() {
    super()
    this.state = {
      listening: false,
      star: 0
    }
    this.toggleListen = this.toggleListen.bind(this)
    this.handleListen = this.handleListen.bind(this)
  }

  toggleListen() {
    this.setState({
      listening: !this.state.listening
    }, this.handleListen)
  }

  handleListen() {

    console.log('listening?', this.state.listening)

    if (this.state.listening) {
      recognition.start()
      recognition.onend = () => {
        console.log("...continue listening...")
        recognition.start()
      }

    } else {
      recognition.stop()
      recognition.onend = () => {
        console.log("Stopped listening per click")
      }
    }

    recognition.onstart = () => {
      console.log("Listening!")
    }

    let finalTranscript = ''
    recognition.onresult = event => {
      let interimTranscript = ''

      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcript = event.results[i][0].transcript;
        if (event.results[i].isFinal) finalTranscript += transcript + ' ';
        else interimTranscript += transcript;
      }

      //-------------------------COMMANDS------------------------------------
      let text = ['no', 'this', 'is', 'patrick', 'crusty', 'crab']
      let star = this.state.star
      text.forEach(t => {
        if (finalTranscript.includes(t)) {
          star++
        }

      });
      if (star !== this.state.star) {
        this.setState({ star: star })
      }
      console.log(star)
    }

    //-----------------------------------------------------------------------

    recognition.onerror = event => {
      console.log("Error occurred in recognition: " + event.error)
    }

  }

  render() {
    return (
      <div>
        <Nav />
        <br />
        <div className="container">
          <div className="center-aligned row">
            <div className="col s2"></div>
            <div className="col s8">
              <p className="white-text">
                Practice now! We'll start recording when you play the video
            </p>
            </div>
            <div className="col s2"></div>

          </div>
          <div className="center-align row">
            <div className="col s2"></div>
            <div className="col s8">
              <ReactPlayer className='' url='https://youtu.be/Vd-CYZ6Sf20'
                onPlay={this.toggleListen}
                onEnded={this.toggleListen} />
            </div>
            <div className="col s2"></div>
          </div>
          <div className="center-align row">
            <div className="col s4"></div>
            <div className="col s4">
              <Link to={"result/"+this.state.star}  className="waves-effect waves-light cyan btn-large">Submit Attempt</Link>

            </div>
            <div className="col s4"></div>
          </div>
        </div>
      </div>
    )
  }
}