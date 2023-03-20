import React from 'react'
import Layout from '../../components/layout'
import Thumbs from '../../components/thumbs'

import '../Work.css'


const projects = [{
    id: 5,
    title: 'Me-more-y',
    slug: 'me-more-y',
    date: 'Oct 2018',
    video: 'https://player.vimeo.com/video/235417350',
    leftColumn : 'We are our memories, our feelings and our plans for the future. Those who are not here anymore, only exist in our memories, and in our hearts. The past only exists through documentation, imagination, recreation, and recollection of impressions. Me|more|y is an installation made of several pieces. Digital and physical symbolic representations of unrelated memories without any proposed narrative.',
    rightColumn: 'Me|more|y is an autobiographical piece and an exploration of the vast field of memory. Based on personal experiences of close relatives with dementia. Me|more|y is a reflection and representation of memories of an entire life. How differently do we encode, store and retrieve memories in the digital era? How differently our brains operate compared to machines and computers?',
    images:['static/me-more-y/me-more-y-0.jpg','static/me-more-y/me-more-y-1.jpg','static/me-more-y/me-more-y-2.jpg','static/me-more-y/me-more-y-3.jpg','static/me-more-y/me-more-y-4.jpg','static/me-more-y/me-more-y-5.jpg','static/me-more-y/me-more-y-6.jpg','static/me-more-y/me-more-y-7.jpg','static/me-more-y/me-more-y-8.jpg','static/me-more-y/me-more-y-9.jpg','static/me-more-y/me-more-y-10.jpg','static/me-more-y/me-more-y-11.jpg']
}]

const MemoreyPage = ({ data, location }) => {

    return(
        <Layout location={location}>
        <div className="work-layout" id={projects[0].id}>
            <div className="topDivider"></div>
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
        <a href="/art/pars-colli"><div className="work-navigation-item"></div></a>
        <a href="/art/unsung-sheroes"><div className="work-navigation-item"></div></a>
        <a href="/art/me-more-y"><div className="work-navigation-item active"></div></a>
        <a href="/art/heretohelp"><div className="work-navigation-item"></div></a>
        </div>
    </Layout>
    )
}

export default MemoreyPage