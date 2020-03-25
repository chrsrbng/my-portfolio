import React from 'react'

import Header from './containers/Header'
import Body from './containers/Body'

const Home = () => {
  return (
    <>
      <div className="header-container">
        <Header />
      </div>
      <div className="body-container">
        <Body />
      </div>
      <div className="footer-container">
        &copy;Chris Rabang | Portfolio
      </div>
    </>
  )
}

export default Home