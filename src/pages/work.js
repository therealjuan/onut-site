import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import { withPrefix } from 'gatsby-link'
import Template from '../components/template'
import Thumbs from '../components/thumbs'

import './Work.css'

const projects = [{
    id: 1,
    title: 'Unsung sheroes',
    date: 'Oct 2018',
    leftColumn : 'Between 8-10 March 2018 “Unsung sheroes” was selected to be part of Sheroes, Lon-art’s third Social Exhibition, championing little-known women warriors, leading ladies and unsung stars.',
    rightColumn: 'The artwork wanted to enhance the role of common women at the base of the social pyramid.',
    images:['static/thumb1.jpg', 'static/00367.jpg', 'static/00389-1344.jpg', 'static/00406-1344.jpg', 'static/00428-1344.jpg', 'static/00472.jpg', 'static/00477-1344.jpg', 'static/00487-1344.jpg']
}]
class WorkPage extends Component {
    state = { activeProject: 0 }
    showActiveProject = (project) => {
        console.log(project)
        this.state.activeProject = project
    }

    getImages = () => {
        console.log(projects[state.activeProject].images)
        return projects[this.state.activeProject].images
    }

    render () {
        
        return (
        <Template>
            <div className="work-layout" id={projects[this.state.activeProject].id}>
                <div className="video-summary">
                    <iframe src="https://player.vimeo.com/video/260203214" width="100%" height="100%" frameBorder="0"></iframe>
                </div>
                <aside className="explanation">
                    <div className="column">
                        {projects[this.state.activeProject].leftColumn}
                    </div>
                    <div className="column">
                        {projects[this.state.activeProject].rightColumn}
                    </div>
                </aside>
            </div>
            <div className="title">
            <hr className="top" />
                <h3>{projects[this.state.activeProject].title}</h3> 
                <h4>{projects[this.state.activeProject].date}</h4>
                <hr className="bottom" />      
            </div>
            <Thumbs images={projects[this.state.activeProject].images} />
        </Template>
        )
    }
      
}

export default WorkPage