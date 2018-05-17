import React from "react"

import "./css/pin.css"

class Pininfo extends React.Component {


  render() {
    return(
      <div className="pininfo-container">
        <h1>{this.props.name}</h1>
        <h2>{this.props.homepage}</h2>

      </div>
    )
  }
}

export default Pininfo
