import React from "react"
import GoogleMapReact from 'google-map-react'
import { Link } from "react-router-dom"

import Pininfo from "./pininfo"
import mapPin from "../images/pin.png"

import "./css/pin.css"


class Pin extends React.Component {

  render() {
    return(
      <Link to={`/restaurant/${this.props.name}` }>
        <div className="pin-container">
          <img src={mapPin} />

        </div>
      </Link>
    )
  }
}


export default Pin
