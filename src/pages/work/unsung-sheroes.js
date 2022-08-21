import React from 'react'
import Layout from '../../components/layout'
import Thumbs from '../../components/thumbs'

import '../Work.css'

const projects = [{
    id: 4,
    title: 'Unsung sheroes',
    slug: 'unsung-sheroes',
    date: 'Oct 2018',
    video: 'https://player.vimeo.com/video/260203214',
    leftColumn : 'Between 8-10 March 2018 “Unsung sheroes” was selected to be part of Sheroes, Lon-art’s third Social Exhibition, championing little-known women warriors, leading ladies and unsung stars.',
    rightColumn: 'The artwork wanted to enhance the role of common women at the base of the social pyramid.',
    images:['static/thumb1.jpg', 'static/00367.jpg', 'static/00389-1344.jpg', 'static/00406-1344.jpg', 'static/00428-1344.jpg', 'static/00472.jpg', 'static/00477-1344.jpg', 'static/00487-1344.jpg']
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
            <a href="/work/foodlovers"><div className="work-navigation-item"></div></a>
            <a href="/work/vim"><div className="work-navigation-item"></div></a>
            <a href="/work/pars-colli"><div className="work-navigation-item"></div></a>
            <a href="/work/unsung-sheroes"><div className="work-navigation-item active"></div></a>
            <a href="/work/me-more-y"><div className="work-navigation-item"></div></a>
            <a href="/work/heretohelp"><div className="work-navigation-item"></div></a>
            </div>
    </Layout>
    )
}

export default ParsColliPage