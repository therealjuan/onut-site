import React from 'react'
import Template from '../../components/template'
import Link from 'gatsby-link'
import Safe from 'react-safe'

import './Flowers.css'

export default class FlowersExperiment extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      data: [],
      city: 'London'
    }

  }

  retrieveWeatherData() {
    fetch('http://api.openweathermap.org/data/2.5/weather?q=' + this.state.city + '&units=metric&APPID=f8a509a0618c0f680acbc88700e17efe')
      .then(response => {
        if (response.ok)
          return response.json()
      })
      .then(data => {
        this.setState({ 
          data: data.main
        })
        
        // console.log(data)
      })
  }

  getStyleForImage() {
    return this.state.style
  }

  updateCity = (e) => {
    this.setState({ city: e.currentTarget.innerHTML})
    this.retrieveWeatherData()
  }

  componentDidMount() {
      this.retrieveWeatherData()
      this.intervalId = setInterval(() => this.retrieveWeatherData(), 30000)
  }

  componentWillUnmount(){
    clearInterval(this.intervalId)
  }
  
  getStyleForImage() {
    return {filter: 'hue-rotate('+ this.state.data.temp + 'deg)'}
  }

  render() {

    const { data } = this.state
    return(
      <Template>
      <div className="flowers">
        <img style={this.getStyleForImage()} src="https://images.unsplash.com/photo-1519381630992-423669ceafba?ixlib=rb-0.3.5&s=7ee365f01c8fce714fd5e5fd53fa3917&auto=format&fit=crop&w=1350&q=80" />
          <div className="data">
            <a onClick={this.updateCity.bind(this)}>Paris</a>
            <a onClick={this.updateCity.bind(this)}>London</a>
            <a onClick={this.updateCity.bind(this)}>Madrid</a>
            <a onClick={this.updateCity.bind(this)}>Tokyo</a>
            <a onClick={this.updateCity.bind(this)}>New York</a>
            <a onClick={this.updateCity.bind(this)}>Oymyakon</a>
            <div>temp: {data.temp}</div>
            <div>pressure: {data.pressure}</div>
            <div>humidity: {data.humidity}</div>
            <div>temp_min: {data.temp_min}</div>
            <div>temp_max: {data.temp_max}</div>
          </div>
        </div>
    </Template>
    )
  }
}