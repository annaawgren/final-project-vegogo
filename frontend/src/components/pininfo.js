import React from "react"
import { Link } from "react-router-dom"

import "./css/pin.css"
import pinbg from "../images/pinbg.png"


class Pininfo extends React.Component {

  render() {
    console.log("hej pin")
    return(
      <div className="pininfo-container">

        <div className="pininfo-container-bg">

        <Link to="/" >
          <div className="pininfo-closing-icon-box">
            <div className="pininfo-closing-icon">
              <div className="pininfo-closing-icon--bar1" />
              <div className="pininfo-closing-icon--bar2" />
            </div>
          </div>
        </Link>

        <div className="content-info-container">

          <div className="restaurant-content-container">
            <h1 className="restaurant-name">{this.props.name}</h1>
            <p className="restaurant-info-txt">{this.props.homepage}</p>
            <p className="restaurant-info-txt">{this.props.type}</p>
            <p className="restaurant-info-txt">{this.props.area}</p>
            <p className="restaurant-info-txt">{this.props.description}</p>
          </div>

          <div className="restaurant-info-pic-container">
            <div className="restaurant-info-pic"></div>
          </div>

        </div>



        </div>

      </div>
    )
  }
}

export default Pininfo
