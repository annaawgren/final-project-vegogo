import React from "react"
import { BrowserRouter, Route, Link } from "react-router-dom"
import GoogleMapReact from 'google-map-react';

import Map from "./map"
import Footer from "./footer"
import Header from "./header"
import Hero from "./hero"
import Pininfo from "./pininfo"

import "./css/app.css"


//Google maps KEY: AIzaSyBEiKkE05TDqjRpx7Pmh4Z5NQAp8CMToGg


class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
      <div className="app-container">

        <Hero />
        <Map />
        <Footer />
        <Route exact path="/" component={Map} />
        <Route path="restaurant:id" component={Pininfo} />
      </div>
    </BrowserRouter>
    )
  }

}

export default App
