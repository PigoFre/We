import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Landing Page</title>
        <meta property="og:title" content="Landing Page" />
      </Helmet>
      <div id="resources" className="home-hero">
        <Link to="/unblocked-one" className="home-cta-btn">
          BLOONS TD 4
        </Link>
        <Link to="/unblocked-one" className="home-cta-btn1">
          VEX 7
        </Link>
        <Link to="/unblocked-one" className="home-cta-btn2">
          RETRO BOWL
        </Link>
        <Link to="/duck-life-3" className="home-cta-btn3">
          DUCK LIFE 3
        </Link>
        <Link to="/strike-force-heroes-2" className="home-cta-btn4">
          STRKE FORCE 2
        </Link>
        <Link to="/unblocked-one" className="home-cta-btn5">
          GUN MAYHEM 2
        </Link>
        <Link to="/unblocked-one" className="home-cta-btn6">
          SPELUNKY
        </Link>
        <Link to="/unblocked-one" className="home-cta-btn7">
          GEOMETRY DASH
        </Link>
        <h1 className="home-heading">
          <span>Welcome To Big Ds Unblocked</span>
          <br></br>
        </h1>
      </div>
    </div>
  )
}

export default Home
