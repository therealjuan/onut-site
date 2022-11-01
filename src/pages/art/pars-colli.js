import React from 'react'
import Layout from '../../components/layout'
import Thumbs from '../../components/thumbs'

import '../Work.css'


const projects = [{
    id: 3,
    title: 'Pars Colli',
    slug: 'pars-colli',
    date: 'May 2019',
    video: 'https://player.vimeo.com/video/349987264',
    leftColumn : '<p>A bespoke installation exploring the  antagonistic duality of technology. Showcasing its advantages and drawbacks. 24/7, we are constantly looking down to our smartphones. Audiences take part by breaking this everyday behaviour. Looking up to 12 different projections running diverse perspectives on four themes related to technology on  at the same time. </p>',
    rightColumn: '<Pars>Shaped as a video dome, Pars colli invites to reflect on how technology impacts human behaviour. The installation topics are Homo[digitalis], [Immediacy], Big[data] and Info[consumption].</p>',
    images:['static/pars-colli/parsColi-01.jpg', 'static/pars-colli/parsColi-02.jpg', 'static/pars-colli/parsColi-03.jpg', 'static/pars-colli/parsColi-04.jpg', 'static/pars-colli/parsColi-05.jpg', 'static/pars-colli/parsColi-06.jpg' ]
}]

const ParsColliPage = ({ data, location }) => {

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
        <Thumbs images={projects[0].images} />
            <div className="work-navigation">
            <a href="/art/foodlovers"><div className="work-navigation-item"></div></a>
            <a href="/art/vim"><div className="work-navigation-item"></div></a>
            <a href="/art/pars-colli"><div className="work-navigation-item active"></div></a>
            <a href="/art/unsung-sheroes"><div className="work-navigation-item"></div></a>
            <a href="/art/me-more-y"><div className="work-navigation-item"></div></a>
            <a href="/art/heretohelp"><div className="work-navigation-item"></div></a>
            </div>
    </Layout>
    )
}

export default ParsColliPage