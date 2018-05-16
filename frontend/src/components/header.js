import React from "react"

import "./css/header.css"

class Header extends React.Component {

  render() {
    return(
      <div className="header-container">
        <h1 className="vegogo-logo">vegogo</h1>
        <div className="hamburger">X</div>
      </div>
    )
  }
}


export default Header
