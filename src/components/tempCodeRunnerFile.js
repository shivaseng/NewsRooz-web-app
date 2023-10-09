import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from "react-router-dom";
// import logo from "../Images/navbarLogo2.png"
export class Navbar extends Component {
    render() {
    return (
        <>
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="#">
      {/* <img src={logo} alt="logo" /> */}
      </NavLink>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-400">
        <li className="nav-item active">
          <NavLink className="nav-link active" to="/">Home<span className="sr-only"></span></NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/entertainment">Entertainment</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/sport">Sport</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/health">Health</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/signup">Registration</NavLink>
        </li>
        
        </ul>
    </div>
  </div>
</nav>
        </>
        
    )
}
}
export default Navbar