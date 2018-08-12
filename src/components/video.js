import React from 'react'

import './Video.css'

const Video = () => (
    <div className="video">
        <video autoPlay muted loop id="videoBackground">
            <source src='https://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_20mb.mp4' type="video/mp4"></source>
        </video>
    </div>
)

export default Video