import React from 'react'
import Link from 'gatsby-link'
import logo from './onut.svg'

import './Header.css'

const Header = () => (
  <header>
      <h1>
        <Link to="/">
          <span>onut</span>
          <div className="logo">
            <svg width="204" height="204" xmlns="http://www.w3.org/2000/svg">
              <circle className="circle outer" cx="102" cy="102" r="100"></circle>
              <circle className="circle inner" cx="110" cy="120" r="64"></circle>
              <circle className="circle simple" cx="102" cy="102" r="92"></circle>
            </svg>
        </div>
        </Link>
      </h1>
      <img src={logo} alt="onut" className="onut-logo" />      
  </header>
)

export default Header
