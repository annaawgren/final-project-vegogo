import React from "react"
import { HashRouter, Route, Link, Switch } from "react-router-dom"
import GoogleMapReact from 'google-map-react'

import Map from "./map"
import Footer from "./footer"
import Header from "./header"
import Hero from "./hero"
import Pininfo from "./pininfo"
import Home from "./home"
import RestaurantList from "./restaurantList"
import Maplist from "./maplist"
import Signup from "./signupComponent"
import { Parallax, Background } from "react-parallax"

import "./css/app.css"


//Google maps KEY: AIzaSyBEiKkE05TDqjRpx7Pmh4Z5NQAp8CMToGg


class App extends React.Component {

  render() {
    return (
      <HashRouter>
        <div className="app-container">
          <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={require("../images/herovideoNew.gif")}
            bgImageAlt="the dog"
            strength={200} >
            <Hero id="f1" />
          </Parallax>
          <Maplist />
          <Switch>
            <Route path="/restaurant-list" component={RestaurantList} />
            <Route path="/restaurant/:name" component={Home} />
            <Route path="/" component={Home} />
          </Switch>
          <Signup />
          <Footer />
        </div>
      </HashRouter>
    )
  }

}

export default App
