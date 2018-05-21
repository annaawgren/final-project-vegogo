import React from "react"

import "./css/footer.css"

class Footer extends React.Component {

  render() {
    return(
      <div className="footer-container">

        <div className="socialmedia-container">
          <div className="socialmedia-link"> f </div>
          <div className="socialmedia-link"> i </div>
          <div className="socialmedia-link"> t </div>
        </div>

        <div className="footer-txt-container">
          <p className="footer-txt">About vegogo</p>
          <p className="footer-txt">#govegogo</p>
          <p className="footer-txt">FAQ</p>
        </div>


        <div className="logo-copyright-container">
          <div className="copyright-footer">
            Copyright © 2018 vegogo
          </div>
          <div className="vegogo-logo-footer">
            vegogo
          </div>
        </div>

      </div>
    )
  }
}


export default Footer
