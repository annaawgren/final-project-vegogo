import React from "react"

import "./css/hero.css"
import melon from "../images/melon2.jpg"
import "./css/signup.css"

class Signup extends React.Component {

  render() {
    return(
      <div>

        <div className="middle-section-container">

          <div className="melon-img">
            <img src={melon} />
          </div>

          <div className="signup-container">
            <p className="signup-container--p">Yes, there will be more.
              <br /> Sign up for vegogo news <br />
              and nice vegan offers.<span className="rocket">✨</span>
            </p>


            <div id="mc_embed_signup">
              <form
                action="https://vegogo.us18.list-manage.com/subscribe/post?u=ba9f0358f5c621215aca582dc&amp;id=fab6881f8a"
                method="post"
                id="mc-embedded-subscribe-form"
                name="mc-embedded-subscribe-form"
                className="validate"
                target="_blank"
                noValidate>
                  <div id="mc_embed_signup_scroll">

              <div className="mc-field-group">

              	<input
                  type="email"
                  className="signup-field"
                  placeholder="enter your email"
                  name="EMAIL"
                  id="mce-EMAIL" />

              </div>
              	<div id="mce-responses" className="clear">
              		<div className="response" id="mce-error-response" xstyle="display:none"></div>
              		<div className="response" id="mce-success-response" xstyle="display:none"></div>
              	</div>
                  <div xstyle="position: absolute; left: -5000px;" aria-hidden="true"></div>
                  <div className="clear">
                    <input
                      type="submit"
                      value="Subscribe"
                      name="subscribe"
                      id="mc-embedded-subscribe"
                      className="signup-button" />
                  </div>
                  </div>
              </form>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default Signup
