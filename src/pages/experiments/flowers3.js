import React from 'react'
import Template from '../../components/template'
import Safe from 'react-safe'
import './Flowers.css'
import Flower1 from './fl1.png'
import GlobalTemperature from './global-temperature.json'

export default class FlowersExperiment2 extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      data: [],
      city: 'London',
      count: 80,
      year: 0,
      highest: 0,
      lowest: 0
    }
  }

  updateCount() {

    if (this.state.count < GlobalTemperature.length )
      this.setState({ 
        count: this.state.count + 1,
        year: GlobalTemperature[this.state.count]['year'],
        highest: GlobalTemperature[this.state.count]['highest'],
        lowest: GlobalTemperature[this.state.count]['lowest']
      })
    else
      this.setState({ count: 0})

    console.log(this.state)
  }

  componentDidMount() {
    this.updateCount()
    this.intervalId = setInterval(() => this.updateCount(), 800)
  }

  componentWillUpdate() {
    
  }

  getTemperatureSign() {
    if (this.state.highest >= 0) {
      return ''
    } else 
      return '-'
  }

  componentWillUnmount(){
     clearInterval(this.intervalId)
  }
  
  getStyleForImage(key) {
    
    // console.log(LondonCsv[this.state.count][key])
    return {
      filter: 'saturate('+ GlobalTemperature[this.state.count][key] + ')',
      backgroundImage: 'url(' + Flower1 + ')'}
  }

  render() {

    const { data } = this.state
    return(
      <Template>
        <div className="grid-experiment-full-image" style={{backgroundImage: 'url(' + Flower1 + ')'}}>
        <div className="flowers-year">{this.state.year}</div>
        <div className="flowers-highest">
          <span className="highest-temperature-sign">{(this.state.highest >= 0) ? '+' : '-'}</span>
          <span className="highest-temperature">{Math.abs(this.state.highest).toFixed(2)}°C</span>
        </div>
        <div className="opacity-layer" style={{opacity: this.state.highest}}></div>
        </div>
    </Template>
    )
  }
}