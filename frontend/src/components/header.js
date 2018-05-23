import React from "react"
import { Link, Route } from "react-router-dom"

import "./css/header.css"

class Header extends React.Component {

  render() {
    return(
      <div className="header-container">
        <Link to="/home" className="vegogo-link">
        <h1 className="vegogo-logo">vegogo</h1>
        </Link>
      </div>
    )
  }
}


export default Header
