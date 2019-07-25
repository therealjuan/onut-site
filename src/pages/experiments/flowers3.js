import React from 'react'
import Layout from '../../components/layout'
import './Flowers.css'
import Flower1 from './fl1.png'

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
      })
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
    return {filter: 'saturate('+ this.state.data.temp + ')'}
  }

  render() {

    const { data } = this.state
    return(
      <Layout location={this.props.location}>
      <div className="flowers">
        <img style={this.getStyleForImage()} alt="" src={Flower1} />
          <div className="data">
            <button onClick={this.updateCity.bind(this)}>Paris</button>
            <button onClick={this.updateCity.bind(this)}>London</button>
            <button onClick={this.updateCity.bind(this)}>Madrid</button>
            <button onClick={this.updateCity.bind(this)}>Tokyo</button>
            <button onClick={this.updateCity.bind(this)}>New York</button>
            <button onClick={this.updateCity.bind(this)}>Oymyakon</button>
            <div>temp: {data.temp}</div>
            <div>pressure: {data.pressure}</div>
            <div>humidity: {data.humidity}</div>
            <div>temp_min: {data.temp_min}</div>
            <div>temp_max: {data.temp_max}</div>
          </div>
        </div>
    </Layout>
    )
  }
}