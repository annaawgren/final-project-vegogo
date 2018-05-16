import React from "react"
import GoogleMapReact from 'google-map-react'

import "./css/pin.css"


class Pin extends React.Component {

  render() {
    return(
      <div className="test">
        <p>{this.props.text}</p>
      </div>

    )
  }
}


export default Pin
