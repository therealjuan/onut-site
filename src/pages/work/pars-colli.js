import React from 'react'
import Layout from '../../components/layout'
import Thumbs from '../../components/thumbs'

import '../Work.css'

const projects = [{
    id: 1,
    slug: 'vim',
    title: 'Vim',
    date: 'Nov 2019',
    video: 'https://player.vimeo.com/video/391834430',
    leftColumn : 'Vim is an ad-hoc installation that reflects on the normalisation of digital violence in our day to day lives. <br/><br/>Vim was exhibited on Sheroes–Revoluciones, a project by Lon-art designed to draw attention to violence against women providing a platform for 30 women artists, survivors and change-makers.',
    rightColumn: 'With the purpose of raising awareness about violence against women in the digital space. Violence has been so normalised, it exists around us, without us noticing it. In 2019, in a world where technology is at the core of our existence, violence has not disappeared. Violence has evolved into new forms, some of them more sophisticated. The harm and target remains the same: violence against women.',
    images:['static/vim/vim-01.jpg', 'static/vim/vim-02.jpg', 'static/vim/vim-03.jpg', 'static/vim/vim-04.jpg', 'static/vim/vim-05.jpg','static/vim/vim-06.jpg']
},{
    id: 2,
    title: 'Pars Colli',
    slug: 'pars-colli',
    date: 'May 2019',
    video: 'https://player.vimeo.com/video/349987264',
    leftColumn : '<p>A bespoke installation exploring the  antagonistic duality of technology. Showcasing its advantages and drawbacks. 24/7, we are constantly looking down to our smartphones. Audiences take part by breaking this everyday behaviour. Looking up to 12 different projections running diverse perspectives on four themes related to technology on  at the same time. </p>',
    rightColumn: '<Pars>Shaped as a video dome, Pars colli invites to reflect on how technology impacts human behaviour. The installation topics are Homo[digitalis], [Immediacy], Big[data] and Info[consumption].</p>',
    images:['static/pars-colli/parsColi-01.jpg', 'static/pars-colli/parsColi-02.jpg', 'static/pars-colli/parsColi-03.jpg', 'static/pars-colli/parsColi-04.jpg', 'static/pars-colli/parsColi-05.jpg', 'static/pars-colli/parsColi-06.jpg' ]
},{
    id: 3,
    title: 'Unsung sheroes',
    slug: 'unsung-sheroes',
    date: 'Oct 2018',
    video: 'https://player.vimeo.com/video/260203214',
    leftColumn : 'Between 8-10 March 2018 “Unsung sheroes” was selected to be part of Sheroes, Lon-art’s third Social Exhibition, championing little-known women warriors, leading ladies and unsung stars.',
    rightColumn: 'The artwork wanted to enhance the role of common women at the base of the social pyramid.',
    images:['static/thumb1.jpg', 'static/00367.jpg', 'static/00389-1344.jpg', 'static/00406-1344.jpg', 'static/00428-1344.jpg', 'static/00472.jpg', 'static/00477-1344.jpg', 'static/00487-1344.jpg']
},{
    id: 4,
    title: 'Me-more-y',
    slug: 'me-more-y',
    date: 'Oct 2018',
    video: 'https://player.vimeo.com/video/235417350',
    leftColumn : 'We are our memories, our feelings and our plans for the future. Those who are not here anymore, only exist in our memories, and in our hearts. The past only exists through documentation, imagination, recreation, and recollection of impressions. Me|more|y is an installation made of several pieces. Digital and physical symbolic representations of unrelated memories without any proposed narrative.',
    rightColumn: 'Me|more|y is an autobiographical piece and an exploration of the vast field of memory. Based on personal experiences of close relatives with dementia. Me|more|y is a reflection and representation of memories of an entire life. How differently do we encode, store and retrieve memories in the digital era? How differently our brains operate compared to machines and computers?',
    images:['static/me-more-y/me-more-y-0.jpg','static/me-more-y/me-more-y-1.jpg','static/me-more-y/me-more-y-2.jpg','static/me-more-y/me-more-y-3.jpg','static/me-more-y/me-more-y-4.jpg','static/me-more-y/me-more-y-5.jpg','static/me-more-y/me-more-y-6.jpg','static/me-more-y/me-more-y-7.jpg','static/me-more-y/me-more-y-8.jpg','static/me-more-y/me-more-y-9.jpg','static/me-more-y/me-more-y-10.jpg','static/me-more-y/me-more-y-11.jpg']
}]

const ParsColliPage = ({ data, location }) => {

    return(
        <Layout location={location}>
        <div className="work-layout" id={projects[1].id}>
            <div className="video-summary">
                <iframe title="video" src={projects[1].video} width="100%" height="100%" frameBorder="0"></iframe>
            </div>
            <aside className="explanation">
                <div className="column" dangerouslySetInnerHTML={{__html: projects[1].leftColumn }} />
                <div className="column" dangerouslySetInnerHTML={{__html: projects[1].rightColumn }} />
            </aside>
        </div>
        <div className="title">
            <hr className="top" />
            <h3>{projects[1].title}</h3>
            <h4>{projects[1].date}</h4>
            <hr className="bottom" />
        </div>
        <Thumbs images={projects[1].images} />
            <div className="work-navigation">
            <a href="/work/vim"><div className="work-navigation-item"></div></a>
            <a href="/work/pars-colli"><div className="work-navigation-item active"></div></a>
            <a href="/work/unsung-sheroes"><div className="work-navigation-item"></div></a>
            <a href="/work/me-more-y"><div className="work-navigation-item"></div></a>
            <a href="/work/heretohelp"><div className="work-navigation-item"></div></a>
            </div>
    </Layout>
    )
}

export default ParsColliPage