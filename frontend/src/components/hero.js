import React from "react"
import Header from "./header"
import ReactPlayer from 'react-player'
import Map from "./map"

import "./css/hero.css"


class Hero extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      email: ""
    }
  }

  signUp() {
    console.log("this state", this.state);
  }

  render() {
    return(
      <div >
        <div className="hero-container">
          <Header />
          <div className="video" />
        </div>
      </div>
    )
  }
}


export default Hero
