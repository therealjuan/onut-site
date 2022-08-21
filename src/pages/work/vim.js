import React from 'react'
import Layout from '../../components/layout'
import Thumbs from '../../components/thumbs'

import '../Work.css'

const projects = [{
    id: 2,
    slug: 'vim',
    title: 'Vim',
    date: 'Nov 2019',
    video: 'https://player.vimeo.com/video/391834430',
    leftColumn : 'Vim is an ad-hoc installation that reflects on the normalisation of digital violence in our day to day lives. <br/><br/>Vim was exhibited on Sheroes–Revoluciones, a project by Lon-art designed to draw attention to violence against women providing a platform for 30 women artists, survivors and change-makers.',
    rightColumn: 'With the purpose of raising awareness about violence against women in the digital space. Violence has been so normalised, it exists around us, without us noticing it. In 2019, in a world where technology is at the core of our existence, violence has not disappeared. Violence has evolved into new forms, some of them more sophisticated. The harm and target remains the same: violence against women.',
    images:['static/vim/vim-01.jpg', 'static/vim/vim-02.jpg', 'static/vim/vim-03.jpg', 'static/vim/vim-04.jpg', 'static/vim/vim-05.jpg','static/vim/vim-06.jpg']
}]

const VimPage = ({ data, location }) => {

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
        <a href="/work/vim"><div className="work-navigation-item active"></div></a>
        <a href="/work/pars-colli"><div className="work-navigation-item"></div></a>
        <a href="/work/unsung-sheroes"><div className="work-navigation-item"></div></a>
        <a href="/work/me-more-y"><div className="work-navigation-item"></div></a>
        <a href="/work/heretohelp"><div className="work-navigation-item"></div></a>
        </div>
    </Layout>
    )
}

export default VimPage