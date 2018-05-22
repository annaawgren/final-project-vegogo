import React from "react"

import Pininfo from "./pininfo"

class RestaurantList extends React.Component {
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
    return(
      <div>
        {this.state.restaurantList.map(restaurant => (
          <div>
            <h2>{restaurant.name}</h2>
            <h2>{restaurant.homepage}</h2> />
          </div>
        ))}
      </div>
    )
  }
}

export default RestaurantList
