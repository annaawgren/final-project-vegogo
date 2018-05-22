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

          <div className="video" />

          <h1 className="hero-explainer">The new guide<br />to the best vegan places <br />to eat in Stockholm</h1>

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
