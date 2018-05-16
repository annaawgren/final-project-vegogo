import React from "react"
import { BrowserRouter, Route, Link } from "react-router-dom"
import GoogleMapReact from 'google-map-react';

import Map from "./map"
import Footer from "./footer"
import Header from "./header"
import Hero from "./hero"

import "./css/app.css"


//Google maps KEY: AIzaSyBEiKkE05TDqjRpx7Pmh4Z5NQAp8CMToGg


class App extends React.Component {

  render() {
    return (
      <div className="app-container">
        <Header />
        <Hero />
        <Map />
        <Footer />
      </div>
    )
  }

}

export default App
