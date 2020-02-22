import React, { Component } from 'react'
import Lightbox from 'react-image-lightbox';
import { withPrefix } from 'gatsby-link'
import 'react-image-lightbox/style.css';
import './Thumbs.css'

class Thumbs extends Component {


    constructor(props) {
        super(props)

        this.state = {
            isOpen: false,
            photoIndex: null
        }
    }

    createThumbs = () => {
        const numImages = this.props.images.length
        let thumbs = []

        for( let i=0; i<numImages; i++) {
            thumbs.push(
                <div key={i} className="thumb">
                    <img class="lazyload" src={withPrefix(this.props.images[i])} alt="onut" onClick={()=>this.imageClick(i)} />
                </div>
            )
        }

        return thumbs
    }

    imageClick = (image) => {
        console.log("/"+this.props.images[image])
        this.setState({
            isOpen: !this.state.isOpen,
            photoIndex: image
        })
    }

    render () {
        const { photoIndex, isOpen } = this.state
        const contentStyle = {
            overlay: {
                "zIndex": 999999
            }
        }
        return(
            <div>
            {isOpen && (
                <Lightbox
                    mainSrc={"/"+this.props.images[photoIndex]}
                    nextSrc={"/"+this.props.images[(photoIndex + 1) % this.props.images.length]}
                    prevSrc={"/"+this.props.images[(photoIndex + this.props.images.length - 1) % this.props.images.length]}
                    onCloseRequest={() => this.setState({ isOpen: false })}
                    imagePadding='50'
                    reactModalStyle={contentStyle}
                    onMovePrevRequest={() =>
                    this.setState({
                        photoIndex: (photoIndex + this.props.images.length - 1) % this.props.images.length,
                    })
                    }
                    onMoveNextRequest={() =>
                    this.setState({
                        photoIndex: (photoIndex + 1) % this.props.images.length,
                    })
                    }
                />
                )}
                <div className="thumbs">
                    {this.createThumbs()}
                </div>
            </div>
        )
    }

}

export default Thumbs