import React from "react"
import Header from "./header"
import ReactPlayer from 'react-player'

import "./css/hero.css"


class Hero extends React.Component {

  render() {
    return(
      <div >



        <div className="hero-container">
          <Header />

          <video autoPlay loop infinite="true" >
            {/* <ReactPlayer url="https://player.vimeo.com/video/270345212" playing /> */}
            <source className="video" src={require("../images/hamburger.mp4")} type="video/mp4" alt="video" />
          </video>
          <p className="hero-explainer">Wanna eat vego? With vegogo you'll know where to go. Wow wow wow! <span>✌️</span> </p>
          <div className="signup-container">
            <form>
              <p className="signup-container--p">Sign up for our newsletter</p>
              <p className="signup-container--p">(no spamming, just <span>❤️</span>offers!)</p>
              <input className="signup-field"
                title="sign up"
              />
            </form>
          </div>
        </div>
      </div>
    )
  }
}


export default Hero
