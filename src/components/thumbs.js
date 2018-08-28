import React, { Component } from 'react'
import thumb1 from '../components/thumb1.jpg'

import './Thumbs.css'

class Thumbs extends Component {
    createThumbs = () => {
        const numImages = this.props.images.length
        let thumbs = []

        for( let i=0; i<numImages; i++) {
            thumbs.push(
                <div key={i} className="thumb">
                    <img src={thumb1} alt="onut" />
                </div>
            )
        }

        return thumbs
    }

    render () {
        return(
            <div className="thumbs">
                {this.createThumbs()}
            </div>
        )
    }

}

export default Thumbs