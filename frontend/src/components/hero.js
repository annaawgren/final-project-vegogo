import React from "react"

import "./css/hero.css"


class Hero extends React.Component {

  render() {
    return(
      <div className="hero-container">
        <p className="hero-explainer">Wanna eat vego? With vegogo you know where to go. Wow wow wow! <span>👌✌️👇</span> </p>
        <div className="signup-container">
          <form>
            <p className="signup-container--p">sign up for our newsletter</p>
            <p className="signup-container--p">(no spamming, just <span>❤️</span>offers!)</p>
            <input className="signup-field"
              title="sign up"
            />
          </form>
        </div>
      </div>
    )
  }
}


export default Hero
