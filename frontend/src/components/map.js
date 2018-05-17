import React from "react"
import GoogleMapReact from 'google-map-react'
import apiKey from "./apikey"

import Pin from "./pin"




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
  };

  componentDidMount() {
    fetch("http://localhost:3000/restaurant").then(response => (
      response.json()
    )).then(json => {
      this.setState({ restaurantList: json })
    })
  }



  render() {
    console.log(this.state)
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: apiKey.apiKey }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          {this.state.restaurantList.map(restaurant => (
            <Pin lat={restaurant.long} lng={restaurant.lat} key={restaurant._id} />
          ))}

        </GoogleMapReact>
      </div>
    );
  }
}

export default Map
