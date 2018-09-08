import React from 'react'
import Template from '../../components/template'
import Safe from 'react-safe'
import Helmet from 'react-helmet'
import './Flowers.css'
import Flower1 from './fl1.png'
import LondonCsv from './weather-london.json'

export default class FlowersExperiment2 extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      data: [],
      city: 'London',
      count: 0
    }
  }

  getTemperature(key) {

  }

  updateCount() {
    if (this.state.count < LondonCsv.length - 1)
      this.setState({ count: this.state.count + 1})
    else
      this.setState({ count: 0})

    console.log(this.state.count)
  }

  componentDidMount() {
    this.intervalId = setInterval(() => this.updateCount(), 2000)
  }

  componentWillUpdate() {
    
  }

  componentWillUnmount(){
     clearInterval(this.intervalId)
  }
  
  getStyleForImage(key) {
    
    // console.log(LondonCsv[this.state.count][key])
    return {
      filter: 'saturate('+ LondonCsv[this.state.count][key] + ')',
      backgroundImage: 'url(' + Flower1 + ')'}
  }

  render() {

    const { data } = this.state
    return(
            // Inside your component
      <Template>
      <Helmet
      bodyAttributes={{
          class: 'no-overflow'
      }}
      />
      <div className="flowers-year">{LondonCsv[this.state.count]['Year']}</div>
      <div className="flowers-experiment-2">
        <div className="grid-experiment-image" style={{backgroundImage: 'url(' + Flower1 + ')'}}>
          <div style={this.getStyleForImage("JAN")}></div>
          <div className="flowers-temperature">{LondonCsv[this.state.count]['JAN']} °C</div>
        </div>
        <div className="grid-experiment-image" style={{backgroundImage: 'url(' + Flower1 + ')'}}>
        <div style={this.getStyleForImage("FEB")}></div>
          <div className="flowers-temperature">{LondonCsv[this.state.count]['FEB']} °C</div>
        </div>
        <div className="grid-experiment-image" style={{backgroundImage: 'url(' + Flower1 + ')'}}>
          <div style={this.getStyleForImage("MAR")}></div>
          <div className="flowers-temperature">{LondonCsv[this.state.count]['MAR']} °C</div>        
        </div>
        <div className="grid-experiment-image" style={{backgroundImage: 'url(' + Flower1 + ')'}}>
          <div style={this.getStyleForImage("APR")}></div>
          <div className="flowers-temperature">{LondonCsv[this.state.count]['APR']} °C</div>
        </div>
        <div className="grid-experiment-image" style={{backgroundImage: 'url(' + Flower1 + ')'}}>
          <div style={this.getStyleForImage("MAY")}></div>
          <div className="flowers-temperature">{LondonCsv[this.state.count]['MAY']} °C</div>
        </div>
        <div className="grid-experiment-image" style={{backgroundImage: 'url(' + Flower1 + ')'}}>
          <div style={this.getStyleForImage("JUN")}></div>
          <div className="flowers-temperature">{LondonCsv[this.state.count]['JUN']} °C</div>
        </div>
        <div className="grid-experiment-image" style={{backgroundImage: 'url(' + Flower1 + ')'}}>
          <div style={this.getStyleForImage("JUL")}></div>
          <div className="flowers-temperature">{LondonCsv[this.state.count]['JUL']} °C</div> 
        </div>
        <div className="grid-experiment-image" style={{backgroundImage: 'url(' + Flower1 + ')'}}>
          <div style={this.getStyleForImage("AUG")}></div>
          <div className="flowers-temperature">{LondonCsv[this.state.count]['AUG']} °C</div>
        </div>
        <div className="grid-experiment-image" style={{backgroundImage: 'url(' + Flower1 + ')'}}>
          <div style={this.getStyleForImage("SEP")}></div>
          <div className="flowers-temperature">{LondonCsv[this.state.count]['SEP']} °C</div>
        </div>
        <div className="grid-experiment-image" style={{backgroundImage: 'url(' + Flower1 + ')'}}>
          <div style={this.getStyleForImage("OCT")}></div>
          <div className="flowers-temperature">{LondonCsv[this.state.count]['OCT']} °C</div>
        </div>
        <div className="grid-experiment-image" style={{backgroundImage: 'url(' + Flower1 + ')'}}>
          <div style={this.getStyleForImage("NOV")}></div>
          <div className="flowers-temperature">{LondonCsv[this.state.count]['NOV']} °C</div>
        </div>
        <div className="grid-experiment-image" style={{backgroundImage: 'url(' + Flower1 + ')'}}>
          <div style={this.getStyleForImage("DEC")}></div>
          <div className="flowers-temperature">{LondonCsv[this.state.count]['DEC']} °C</div>
        </div>
      </div>
    </Template>
    )
  }
}