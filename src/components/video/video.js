import React from 'react'
import videoSource from './water.mp4'
import videoPoster from './water.gif'
import './Video.css'

const Video = () => (
    <div className="video">
        <video autoPlay muted loop id="videoBackground" poster={videoPoster}>
            <source src={videoSource} type="video/mp4"></source>
        </video>
    </div>
)

export default Video