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
  </Layout>
  )
}