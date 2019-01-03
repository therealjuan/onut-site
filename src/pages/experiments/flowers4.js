import React from 'react'
import Template from '../../components/template'
import './Flowers.css'
import Flower1 from './fl1.png'

export default class FlowersExperiment4 extends React.Component {

  render() {

    return(
      <Template>
        <div className="grid-experiment-full-image" style={{backgroundImage: 'url(' + Flower1 + ')'}}></div>
    </Template>
    )
  }
}