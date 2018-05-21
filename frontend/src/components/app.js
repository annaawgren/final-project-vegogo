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

import "./css/app.css"


//Google maps KEY: AIzaSyBEiKkE05TDqjRpx7Pmh4Z5NQAp8CMToGg


class App extends React.Component {

  render() {
    return (
      <HashRouter>
        <div className="app-container">
          <Switch>
            <Route path="/restaurants" component={RestaurantList} />
            <Route path="/restaurant/:name" component={Home} />
            <Route path="/" component={Home} />
          </Switch>
          <Footer />
        </div>
      </HashRouter>
    )
  }

}

export default App
