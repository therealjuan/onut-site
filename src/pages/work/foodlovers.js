import React from 'react'
import Layout from '../../components/layout'
import Thumbs from '../../components/thumbs'

import '../Work.css'

const projects = [{
    id: 1,
    slug: 'foodlovers',
    title: 'FoodLovers',
    date: 'Jul 2022',
    video: 'https://player.vimeo.com/video/735147425',
    leftColumn : 'We believe in a Global world. Where everyone celebrates differences. Live in peace, appreciate & respect each other. This is why we created 595 images showing 85 recipes from 21 countries. A <a href="https://opensea.io/collection/foodlovers-by-onut" target="_blank">limited NFT collection</a> of computationally generated Art inspired by Art Deco & our personal circumstances.',
    rightColumn: 'Foodlovers project began the same day the Russo-Ukrainian war started. It is a call to action from ONUT, the collaborative effort of 2 Spanish multimedia artists based in Amsterdam. 100% earnings will be donated to the <a href="https://aid.prytulafoundation.org/en/" target="_blank">SERHIY PRYTULA Charity Foundation</a> providing humanitarian aid to Ukrainians affected by the war..<br/><br/>Learn more in <a href="https://foodlovers.onut.art" target="_blank">foodlovers.onut.art</a>.',
    images:['static/foodlovers/foodlovers-0.png','static/foodlovers/foodlovers-1.png','static/foodlovers/foodlovers-3.png', 'static/foodlovers/foodlovers-2.png'],
    cube: 'static/foodlovers/foodlovers-cube.webm'
}]

const FoodLoversPage = ({ data, location }) => {

    return(
        <Layout location={location}>
        <div className="work-layout" id={projects[0].id}>
            <div className="video-summary">
                <iframe title="video" src={projects[0].video} width="100%" height="100%" frameBorder="0"></iframe>
            </div>
            <aside className="explanation">
                <div className="column" dangerouslySetInnerHTML={{__html: projects[0].leftColumn }} />
                <div className="column" dangerouslySetInnerHTML={{__html: projects[0].rightColumn }} />
            </aside>
        </div>
        <div className="title">
            <hr className="top" />
            <h3>{projects[0].title}</h3>
            <h4>{projects[0].date}</h4>
            <hr className="bottom" />
        </div>
        <Thumbs images={projects[0].images} video={projects[0].cube}/>
        <div className="work-navigation">
        <a href="/work/foodlovers"><div className="work-navigation-item active"></div></a>
        <a href="/work/vim"><div className="work-navigation-item"></div></a>
        <a href="/work/pars-colli"><div className="work-navigation-item"></div></a>
        <a href="/work/unsung-sheroes"><div className="work-navigation-item"></div></a>
        <a href="/work/me-more-y"><div className="work-navigation-item"></div></a>
        <a href="/work/heretohelp"><div className="work-navigation-item"></div></a>
        </div>
    </Layout>
    )
}

export default FoodLoversPage