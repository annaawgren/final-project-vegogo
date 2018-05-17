import React from "react"

import "./css/pin.css"

class Pininfo extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      restaurantList: []
    }
  }

  componentDidMount() {
    fetch("http://localhost:3000/restaurant").then(response => (
      response.json()
    )).then(json => {
      this.setState({ restaurantList: json })
    })
  }

  render() {
    console.log(this.props._id);
    return(
      <div>
        <div>

          {this.props.id}
          {/* {this.state.restaurantList.map((restaurant, index) => {
            return (
              {this.props.index}
            )
          }
          )} */}
        </div>
      </div>
    )
  }
}

export default Pininfo
