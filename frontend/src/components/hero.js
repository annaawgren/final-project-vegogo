import React from "react"
import Header from "./header"
import ReactPlayer from 'react-player'
import Map from "./map"

import "./css/hero.css"
import scroll from "../images/scroll.png"



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

          <video autoPlay loop infinite="true" >
            <source className="video" src={require("../images/veganvideo.mp4")} type="video/mp4" alt="video" />
          </video>

          <div className="scroll-container">
            <div className="scroll-img">
              <a className="scroll-link" href="#f1">
              <img src={scroll} />
              </a>
            </div>
          </div>

        </div>

      </div>
    )
  }
}


export default Hero
