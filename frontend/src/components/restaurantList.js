import React from "react"
import { Route, Link } from "react-router-dom"

import "./css/list.css"
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
      const compare = (a, b) => {
        const nameA = a.name.toUpperCase();
        const nameB =b.name.toUpperCase();

        let comparison = 0;
        if (nameA > nameB) {
          comparison = 1;
        } else if (nameA < nameB) {
          comparison = -1;
        }
        return comparison
        }

      this.setState({ restaurantList: json.sort(compare) })
    })
      window.scrollTo(0, 920)
  }

  handleBackToTop = () =>  {
    window.scrollTo(0, 920)
  }

  render() {


    return(
      <div className="map-container">

        {this.state.restaurantList.map(restaurant => (
          <div className="restaurantlist-container">
            <div className="restaurantlist-box-bg">

              <div className="restaurant-img" />

              <div className="restaurant-content">
                <h1 className="restaurant-name">{restaurant.name}</h1>
                <p className="restaurant-info-txt">{restaurant.address}</p>
                <p className="restaurant-info-txt">{restaurant.phoneNumber}</p>
                <p className="restaurant-info-txt">{restaurant.homepage}</p>
                <p className="restaurant-info-txt">{restaurant.openingHours}</p>
                <p className="restaurant-info-txt">{restaurant.description}</p>
                <a href={restaurant.homepage} target="blank"><p className="restaurant-info-txt">{restaurant.homepage}</p></a>
              </div>

            </div>
          </div>
        ))}

        <button onClick={this.handleBackToTop} className="backToTop">
          <p className="backToTop-txt">Back to top <span className="top-rocket">🚀</span></p>
        </button>
      </div>
    )
  }
}

export default RestaurantList
