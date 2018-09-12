import React, { Component } from 'react'
import { withPrefix } from 'gatsby-link'

import './Thumbs.css'

class Thumbs extends Component {
    createThumbs = () => {
        const numImages = this.props.images.length
        let thumbs = []

        for( let i=0; i<numImages; i++) {
            console.log(this.props.images[i])
            thumbs.push(
                <div key={i} className="thumb">
                    <img src={withPrefix(this.props.images[i])} alt="onut" />
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