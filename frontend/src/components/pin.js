import React from "react"
import GoogleMapReact from 'google-map-react'

import Pininfo from "./pininfo"
import { Link } from "react-router-dom"
import "./css/pin.css"


class Pin extends React.Component {

  render() {
    return(
      <Link to={`/restaurant/${this.props.name}` }>
        <div className="pin-container">
          <div className="pin" />
        </div>
      </Link>
    )
  }
}


export default Pin
