import React from 'react'
import Logo from '../components/logo'
import logoImage from './onut.svg'
import './Header.css'

const Header = () => (
  <header>
      <h1>
          <span>onut</span>
          <div className="logo">
            <svg width="204" height="204" xmlns="http://www.w3.org/2000/svg">
              <circle className="circle outer" cx="102" cy="102" r="100"></circle>
              <circle className="circle inner" cx="110" cy="120" r="64"></circle>
              <circle className="circle simple" cx="102" cy="102" r="92"></circle>
            </svg>
        </div>
      </h1>
      <Logo className="logo-center" logo={logoImage} />
  </header>
)

export default Header