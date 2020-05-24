import React from 'react'
import logo from '../../assets/nav-logo.png';
import { Link, useHistory } from "react-router-dom";

export default function Nav() {
  let history = useHistory();
  return (
    <nav style={{boxShadow:'rgba(0,0,0,0)'}}>
      <div className='nav-wrapper' style={{backgroundColor:'#524F56'}}>
        <Link to="/" className="brand-logo center"><img src={logo} /></Link>

        <ul>
          <li onClick={e=>history.goBack()}>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Back</div>
          </li>
        </ul>
      </div >
    </nav>
  )
}
