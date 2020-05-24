import React from 'react'
import Nav from '../Nav'

export default class Result extends React.Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {

    console.log(window.location.pathname.split('/')[2])
    return (
      <div>
        <Nav />
        <br />
        <div className="container center-align">
          <h3 className="white-text">
            {window.location.pathname.split('/')[2] < 8 ?
              "You can do better!" :
              window.location.pathname.split('/')[2] < 16 ?
                "Good job!" :
                "Fantastic!"
            }
          </h3>
          {window.location.pathname.split('/')[2] < 8 ?
            <div className="row">
              <div className="col s4"></div>
              <div className="col s4"><i className="material-icons yellow-text">star</i></div>
              <div className="col s4"></div>
            </div> :
            window.location.pathname.split('/')[2] < 16 ?
            <div className="row">
            <div className="col s4"></div>
            <div className="col s4"><i className="material-icons yellow-text">star</i><i className="material-icons yellow-text">star</i></div>
            <div className="col s4"></div>
          </div> :
              <div className="row">
              <div className="col s4"></div>
              <div className="col s4"><i className="material-icons yellow-text">star</i><i className="material-icons yellow-text">star</i><i className="material-icons yellow-text">star</i></div>
              <div className="col s4"></div>
            </div> 
          }
        </div>
      </div>
    )
  }
}

