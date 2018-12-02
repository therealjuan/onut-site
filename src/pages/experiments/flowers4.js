import React from 'react'
import Template from '../../components/template'
import Safe from 'react-safe'
import './Flowers.css'
import Flower1 from './fl1.png'
import GlobalTemperature from './global-temperature.json'

export default class FlowersExperiment4 extends React.Component {

  constructor(props) {
    super(props)
  }


  componentDidMount() {
  }

  render() {

    return(
      <Template>
        <div className="grid-experiment-full-image" style={{backgroundImage: 'url(' + Flower1 + ')'}}></div>
    </Template>
    )
  }
}