import React from 'react'
import Layout from '../components/layout'
import Video from '../components/video/video'
import Header from '../components/header'

import './Home.css'

export default props => {

  return (
  <Layout location={props.location}>
    <Video />
    <Header />
    <div className="details">
        <h4>50% <a href="https://alixmzmz.eu" target="_blank">Alix Martínez Martínez</a></h4>
        <h4>50% <a href="https://juanreal.com" target="_blank">Juan Real Garry</a></h4>
    </div>
  </Layout>
  )
}