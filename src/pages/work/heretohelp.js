import React from 'react'
import Layout from '../../components/layout'
import Thumbs from '../../components/thumbs'

import '../Work.css'

const images = ['static/heretohelp/heretohelp-2.jpg','static/heretohelp/heretohelp-3.gif','static/heretohelp/heretohelp-4.jpg','static/heretohelp/heretohelp-5.gif','static/heretohelp/heretohelp-1.jpg'];

const heretohelpPage = ({ data, location }) => {

    return(
        <Layout location={location}>
        <div className="work-layout" id="6">
            <div className="video-summary">
                <iframe title="video" src="https://player.vimeo.com/video/218911459" width="100%" height="100%" frameBorder="0"></iframe>
            </div>
            <aside className="explanation">
                <div className="column">
                <p>|HERETOHELP| is an interactive installation where two machines interact autonomously. In a request for an emergency the machines action outgoing and incoming calls. A reflection on the actual transition period. Machines become more human and humans behave like machines in a nonsense of actions.</p>
                </div>
                <div className="column">
                <p>The installation is a reflection on how, within the system, humans behave at times as machines. Unable to act or indifferent to fight the big machine. What makes us different humans and machines?</p>
                </div>
            </aside>
        </div>
        <div className="title">
            <hr className="top" />
            <h3>|HERETOHELP|</h3>
            <h4>June 2017</h4>
            <hr className="bottom" />
        </div>
        <Thumbs images={images} />
        <div className="work-navigation">
        <a href="/work/foodlovers"><div className="work-navigation-item"></div></a>
        <a href="/work/vim"><div className="work-navigation-item"></div></a>
        <a href="/work/pars-colli"><div className="work-navigation-item"></div></a>
        <a href="/work/unsung-sheroes"><div className="work-navigation-item"></div></a>
        <a href="/work/me-more-y"><div className="work-navigation-item"></div></a>
        <a href="/work/heretohelp"><div className="work-navigation-item active"></div></a>
        </div>
    </Layout>
    )
}

export default heretohelpPage