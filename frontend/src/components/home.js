import React from "react"
import { Route } from "react-router-dom"
import { Parallax, Background } from "react-parallax"
import Hero from "./hero"
import Map from "./map"
import Pininfo from "./pininfo"
import Signup from "./signupComponent"
import heroimg from "../images/heroimg.jpg"
import RestaurantList from "./restaurantList"

import "./css/map.css"
import "./css/pin.css"


class Home extends React.Component {

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


  renderPinInfo = (paramInfo) => {
    console.log("renderPinInfo")
    return this.state.restaurantList.filter(restaurant => (
      restaurant.name === paramInfo
    )).map(restaurant => (
      <Pininfo
        key={restaurant.id}
        name={restaurant.name}
        homepage={restaurant.homepage}
        area={restaurant.area}
        type={restaurant.type}
        description={restaurant.description}
        hidePinInfo={this.handlePinInfoHide}/>
    ))
  }

  render() {
      console.log(this.props.match.params.name)
      const paramInfo = this.props.match.params.name
    return(
      <div>

        <Parallax
          blur={{ min: -15, max: 15 }}
          bgImage={require("../images/heropics.gif")}
          bgImageAlt="the dog"
          strength={200} >
          <Hero id="f1" />
        </Parallax>

        <Route path="/restaurant-list" component={RestaurantList} />

        <div className="map-container">
          {paramInfo && this.renderPinInfo(paramInfo)}

          <Route path="/restaurant-map" component={Map} />
          <Route path="/home" component={Map} />
          <Route exact path="/" component={Map} />
          <Route path="/restaurant/:name" component={Map} />
        </div>

        <Signup />

      </div>
    )
  }
}


export default Home
