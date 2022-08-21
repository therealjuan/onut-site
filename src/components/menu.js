import React from 'react'
import Link from 'gatsby-link'
import Logo from '../components/logo'
import logoImage from './onut-gold.svg'
import './Menu.css'

const ListLink = props => (
    <li className={props.className} >
        <Link to={props.to} onClick={props.onClick} activeClassName="active">
            {props.children}
        </Link>
    </li>
)

class Menu extends React.Component {
    state = { showMenu: false }

    toggleMenu = () => {
        this.setState({
            showMenu: !this.state.showMenu
        })

    }

    handleMobile = () => {
        (this.state.showMenu) ? this.toggleMenu() : void 0
    }

    render() {
        const menuActive = this.state.showMenu ? 'is-active' : '';
        const burgerActive = this.state.showMenu ? 'is-active' : '';

        return(
            <section id="sidebar" className={`${menuActive}`}>
                <section className='menu'>
                    <ul>
                        <ListLink to="/work/foodlovers" onClick={this.handleMobile} className="work">W o r k</ListLink>
                        <li>
                            <a href="mailto:hello@onut.art" onClick={this.handleMobile}>H<br/>i</a>
                        </li>
                    </ul>
                    <ul>
                        <ListLink to="/experiments/" onClick={this.handleMobile} className="exp">E<br/>x<br/>p</ListLink>
                        <ListLink to="/exhibitions/" onClick={this.handleMobile} className="exh">E<br/>x<br/>h</ListLink>
                    </ul>
                    <ul>
                        <ListLink to="/manifesto/" onClick={this.handleMobile} className="manifesto">M a n<br/>i<br/>f<br/>e<br/>s<br/>t<br/>o</ListLink>
                    </ul>
                    <div className={`show-menu ${burgerActive}`} onClick={this.toggleMenu}></div>
                </section>
                { (this.props.location.pathname !== '/' ) ? (
                <Logo className="logoMenu" logo={logoImage} onClick={this.handleMobile} />
                ) : null}
            </section>
        )
    }
};

export default Menu