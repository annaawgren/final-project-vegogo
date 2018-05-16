import React from "react"
import GoogleMapReact from 'google-map-react'

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
      <div className="" >

        <div className="pin-container">
          <div onClick={this.handlePinInfoClick} className="test" />
          <div className={`pin-info ${this.state.pinInfoVisible ? "visible" : "hidden"}`}>
            hej
          </div>
        </div>


      </div>

    )
  }
}


export default Pin
