import React from "react"
import { Link, withRouter } from "react-router-dom"
import GoogleMapReact from 'google-map-react'
import apiKey from "./apikey"
import Hero from "./hero"

import Pin from "./pin"
import checkedBG from "../images/checkedBG.jpg"
import nearMe from "../images/nearMe.png"


class Map extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      restaurantList: []
    }
  }

  static defaultProps = {
    center: {
      lat: 59.334591,
      lng: 18.063240
    },
    zoom: 12
  }

  componentDidMount() {
    fetch("http://localhost:3000/restaurant").then(response => (
      response.json()
    )).then(json => {
      this.setState({ restaurantList: json })
    })
  }

  render() {
    return (
      <div className="map-container" id="f1">

        <div className="mapOrList-container">
          <Link to="/home" className="mapOrList-link">
            <h1 className="mapOrList-txt">map</h1>
          </Link>
          <Link to="/restaurants" className="mapOrList-link">
            <h1 className="mapOrList-txt">/list</h1>
          </Link>
        </div>

        <div style={{ height: '100vh', width: '100%' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: apiKey.apiKey }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom} >
            {this.state.restaurantList.map(restaurant => (
              <Pin
                lat={restaurant.lat}
                lng={restaurant.long}
                key={restaurant._id}
                name={restaurant.name}
                homepage={restaurant.homepage}
                area={restaurant.area}
                description={restaurant.description}
                type={restaurant.type} />
            ))}

          </GoogleMapReact>

          <div className="mapOrList-container">
            <img src={nearMe} />
            <div className="mapOrList-txt--small">Near me</div>
          </div>

        </div>
      </div>
    );
  }
}

export default withRouter(Map)
