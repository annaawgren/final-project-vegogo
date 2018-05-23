import React from "react"
import { Link } from "react-router-dom"

import mapPin from "../images/pin.png"
import Map from "./css/map.css"

class Maplist extends React.Component {

  render() {
    return(
      <div className="map-container">

        <h1 className="map-explainer">The best vegan places <br />to eat in Stockholm</h1>

        <div className="mapOrList-container">
          <div className="mapList-box">
            <Link to="/" className="mapOrList-link">
              <h1 className="mapOrList-txt">map</h1>
            </Link>
            <Link to="/restaurant-list" className="mapOrList-link">
              <h1 className="mapOrList-txt">/list</h1>
            </Link>
          </div>

          <div className="nearMe-container">
            <div>
              <img src={mapPin} />
            </div>

            <div className="mapOrList-txt--small">What's <br /> near me</div>
          </div>
        </div>


      </div>
    )
  }
}

export default Maplist
