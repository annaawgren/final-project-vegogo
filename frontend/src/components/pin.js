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
      <div>


        <div className="pin-container">
          <div onClick={this.handlePinInfoClick} className="test" />
        <Link to={`/restaurants/${this.props.id}` } />
        </div>
        {this.state.pinInfoVisible ? <Pininfo key={this.props.id} /> : null}
      </div>

    )
  }
}


export default Pin
