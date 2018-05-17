import React from "react"
import Filterbutton from "./filterbutton"

import "./css/header.css"

class Header extends React.Component {

  render() {
    return(
      <div className="header-container">
        <h1 className="vegogo-logo">vegogo</h1>

      <Filterbutton />

      </div>
    )
  }
}


export default Header
