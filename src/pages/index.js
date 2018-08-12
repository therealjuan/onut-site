import React from 'react'
import Link from 'gatsby-link'
import Header from '../components/header'
import Video from '../components/video'

import './Home.css'

const IndexPage = () => (
  <div className="home">
    <Video />
    <div className="home-content">
      <Header />
      <a href="/manifesto" className="manifesto">Manifesto</a>
    </div>
  </div>
)

export default IndexPage