import React from "react"
import GoogleMapReact from 'google-map-react'

import Pininfo from "./pininfo"
import { Link } from "react-router-dom"
import "./css/pin.css"


class Pin extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      pinInfoVisible: false
    }
  }

  handlePinInfoClick = () => {
    this.setState({ pinInfoVisible: !this.state.pinInfoVisible })
  }


  render() {
    return(
      <div onClick={this.handlePinInfoClick}>
        <Link to={`/restaurant/${this.props.name}` }>
          <div className="pin-container">
            <div className="pin" />
          </div>
        </Link>
        {this.state.pinInfoVisible ?
          <Pininfo
            name={this.props.name}
            homepage={this.props.homepage} /> : null}
      </div>

    )
  }
}


export default Pin
