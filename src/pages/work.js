import React, { Component } from 'react'
import Layout from '../components/layout'
import Thumbs from '../components/thumbs'

import './Work.css'

const projects = [{
        id: 1,
        title: 'Pars Colli',
        date: 'May 2019',
        video: 'https://player.vimeo.com/video/349987264',
        leftColumn : '<p>A bespoke installation exploring the  antagonistic duality of technology. Showcasing its advantages and drawbacks. 24/7, we are constantly looking down to our smartphones. Audiences take part by breaking this everyday behaviour. Looking up to 12 different projections running diverse perspectives on four themes related to technology on  at the same time. </p>',
        rightColumn: '<Pars>Shaped as a video dome, Pars colli invites to reflect on how technology impacts human behaviour. The installation topics are Homo[digitalis], [Immediacy], Big[data] and Info[consumption].</p>',
        images:['static/pars-colli/parsColi-01.jpg', 'static/pars-colli/parsColi-02.jpg', 'static/pars-colli/parsColi-03.jpg', 'static/pars-colli/parsColi-04.jpg', 'static/pars-colli/parsColi-05.jpg', 'static/pars-colli/parsColi-06.jpg' ]
    },{
        id: 2,
        title: 'Unsung sheroes',
        date: 'Oct 2018',
        video: 'https://player.vimeo.com/video/260203214',
        leftColumn : 'Between 8-10 March 2018 “Unsung sheroes” was selected to be part of Sheroes, Lon-art’s third Social Exhibition, championing little-known women warriors, leading ladies and unsung stars.',
        rightColumn: 'The artwork wanted to enhance the role of common women at the base of the social pyramid.',
        images:['static/thumb1.jpg', 'static/00367.jpg', 'static/00389-1344.jpg', 'static/00406-1344.jpg', 'static/00428-1344.jpg', 'static/00472.jpg', 'static/00477-1344.jpg', 'static/00487-1344.jpg']
    },{
        id: 3,
        title: 'Me-more-y',
        date: 'Oct 2018',
        video: 'https://player.vimeo.com/video/235417350',
        leftColumn : 'We are our memories, our feelings and our plans for the future. Those who are not here anymore, only exist in our memories, and in our hearts. The past only exists through documentation, imagination, recreation, and recollection of impressions. Me|more|y is an installation made of several pieces. Digital and physical symbolic representations of unrelated memories without any proposed narrative.',
        rightColumn: 'Me|more|y is an autobiographical piece and an exploration of the vast field of memory. Based on personal experiences of close relatives with dementia. Me|more|y is a reflection and representation of memories of an entire life. How differently do we encode, store and retrieve memories in the digital era? How differently our brains operate compared to machines and computers?',
        images:['static/me-more-y/me-more-y-0.jpg','static/me-more-y/me-more-y-1.jpg','static/me-more-y/me-more-y-2.jpg','static/me-more-y/me-more-y-3.jpg','static/me-more-y/me-more-y-4.jpg','static/me-more-y/me-more-y-5.jpg','static/me-more-y/me-more-y-6.jpg','static/me-more-y/me-more-y-7.jpg','static/me-more-y/me-more-y-8.jpg','static/me-more-y/me-more-y-9.jpg','static/me-more-y/me-more-y-10.jpg','static/me-more-y/me-more-y-11.jpg']
    }]
class WorkPage extends Component {
    state = { activeProject: 0 }
    showActiveProject = (project) => {
        this.setState({activeProject : project})
    }

    getImages = () => {
        return projects[this.state.activeProject].images
    }

    render () {

        return (
        <Layout location={this.props.location}>
            <div className="work-layout" id={projects[this.state.activeProject].id}>
                <div className="video-summary">
                    <iframe title="video" src={projects[this.state.activeProject].video} width="100%" height="100%" frameBorder="0"></iframe>
                </div>
                <aside className="explanation">
                    <div className="column" dangerouslySetInnerHTML={{__html: projects[this.state.activeProject].leftColumn }} />
                    <div className="column" dangerouslySetInnerHTML={{__html: projects[this.state.activeProject].rightColumn }} />
                </aside>
            </div>
            <div className="title">
                <hr className="top" />
                <h3>{projects[this.state.activeProject].title}</h3>
                <h4>{projects[this.state.activeProject].date}</h4>
                <hr className="bottom" />
            </div>
            <Thumbs images={projects[this.state.activeProject].images} />
            { projects.length > 1 ? (
                <div className="work-navigation">
                    {projects.map( (project, index) => (
                        <div key={project.id}
                            onClick={() => this.showActiveProject(index)}
                            className= {
                            "work-navigation-item " + (
                                projects[this.state.activeProject].id === project.id ?
                                    " active" : this.state.activeProject
                            ) }>
                        </div>
                    ))}
                </div>
            ) : null }
        </Layout>
        )
    }

}

export default WorkPage