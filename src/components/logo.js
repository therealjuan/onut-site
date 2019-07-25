import React from 'react'
import Link from 'gatsby-link'
import './Logo.css'

export default class Logo extends React.Component {

    render() {
        return(
            <Link to="/" className={this.props.className} onClick={this.props.onClick} >
            <img src={this.props.logo} alt="onut" className="onut-logo" />
        </Link>
        )
    }
}