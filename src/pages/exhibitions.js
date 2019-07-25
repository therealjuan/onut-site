import React from 'react'
import Layout from '../components/layout'

import './Exhibitions.css'

const exhibitions = [{
    exhibition: 'Anamorphic Waves',
    exhibitionLink: 'http://uglyduck.org.uk/portfolio_page/anamorphic/',
    installation: 'Pars Colli',
    venue: 'Ugly Duck',
    city: 'London',
    date: '11-14 April 2019',
    text : 'A collection of diversified works including; interactive light sculpture, brain wave prints, video art, Virtual Gardens, AI, alternative universes, musical machines alongside many other creative investigations.',
    image: 'static/pars-colli/parsColi-01.jpg'
},{
    exhibition: 'Sheroes',
    exhibitionLink: 'http://uglyduck.org.uk/portfolio_page/sheroes/',
    installation: 'Unsung Sheroes',
    venue: 'Ugly Duck',
    city: 'London',
    date: '11-14 October 2018',
    text : 'Between 8-10 March 2018 “Unsung sheroes” was selected to be part of Sheroes, Lon-art’s third Social Exhibition, championing little-known women warriors, leading ladies and unsung stars.',
    image: 'static/thumb1.jpg'
},{
    exhibition: '[Virtuality Mortality]',
    exhibitionLink: 'https://virtualitymortality.wordpress.com/',
    installation: 'Me-more-y',
    venue: 'Ugly Duck',
    city: 'London',
    date: '14-15 October 2017',
    text : 'Collective exhibition curated by the XAP Cross art Projects Collective. 21 international artists investigate our symbiotic relationships with technology.',
    image: 'static/virtuality-mortality.jpg'
}]

const ExhPage = (props) => {

    return(
    <Layout location={props.location}>
    <div className="exhibitions-layout">
    {exhibitions.map((exhibition, index) => {

        const exhibitionImageStyle = {
            backgroundImage: 'url(/' + exhibition.image + ')'
        }

        return <div className="exhibition" key={index}>
            <div className="exhibition-image" style={exhibitionImageStyle}>
            </div>
            <div className="exhibition-content">
            <h2 className="exhibition-exhibition">Exhibited at <a href={exhibition.exhibitionLink} target="_blank">{exhibition.exhibition}</a></h2>
            <h3 className="exhibition-installation">{exhibition.installation}</h3>
                <h4 className="exhibition-details">{exhibition.date} - {exhibition.venue}. {exhibition.city}</h4>
                <p className="exhibition-explanation">{exhibition.text}</p>
            </div>
        </div>
    })}

    </div>
    </Layout>
    )
}

export default ExhPage