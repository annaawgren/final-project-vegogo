import React from "react"
import GoogleMapReact from 'google-map-react'

import Pin from "./pin"




class Map extends React.Component {

  static defaultProps = {
    center: {
      lat: 59.334591,
      lng: 18.063240
    },
    zoom: 12
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBEiKkE05TDqjRpx7Pmh4Z5NQAp8CMToGg" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <Pin lat={59.320805} lng={18.032224} />

        </GoogleMapReact>
      </div>
    );
  }
}

export default Map
