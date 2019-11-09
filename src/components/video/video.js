import React from 'react'
import videoSource from './water.mp4'
import './Video.css'

const Video = () => (
    <div className="video">
        <video preload="none" autoPlay muted playsInline loop id="videoBackground">
            <source src={videoSource} type="video/mp4"></source>
        </video>
    </div>
)

export default Video