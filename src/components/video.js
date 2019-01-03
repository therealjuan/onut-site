import React from 'react'
import videoSource from './water.mp4'
import './Video.css'

const Video = () => (
    <div className="video">
        <video autoPlay muted loop id="videoBackground">
            <source src={videoSource} type="video/mp4"></source>
        </video>
    </div>
)

export default Video