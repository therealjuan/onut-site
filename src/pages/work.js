import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Template from '../components/template'
import Thumbs from '../components/thumbs'

import './Work.css'

const projects = [{
    id: 1,
    title: 'Unsung sheroes',
    date: 'Oct 2018',
    leftColumn : 'Between 8-10 March 2018 “Unsung sheroes” was selected to be part of Sheroes, Lon-art’s third Social Exhibition, championing little-known women warriors, leading ladies and unsung stars.',
    rightColumn: 'The artwork wanted to enhance the role of common women at the base of the social pyramid.',
    images:['../components/thumb1.jpg','../components/thumb1.jpg']
},
{
    id: 2,
    title: 'Unsung sheroes 2',
    date: 'Nov 2018',
    leftColumn : 'Left',
    rightColumn: 'Right',
    images:['../components/thumb1.jpg','../components/thumb1.jpg','../components/thumb1.jpg','../components/thumb1.jpg']
}]
class WorkPage extends Component {
    state = { activeProject: 0 }
    showActiveProject = (project) => {
        console.log(project)
        this.state.activeProject = project
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
            <section className="project-selection">
                <ul>
                    <li>
                        <Link className="project-selector" key="1" to='/work/' onClick={this.showActiveProject(0)}>0</Link>
                    </li>
                    <li>
                        <Link className="project-selector" key="2" to='/work/' onClick={this.showActiveProject(1)}>1</Link>
                    </li>                    
                </ul>
            </section>
        </Template>
        )
    }
      
}

export default WorkPage