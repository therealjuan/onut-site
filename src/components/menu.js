import React from 'react'
import Link from 'gatsby-link'
import Logo from '../components/logo'
import '../components/Menu.css'

const getActiveClassName = (path) => {
    return (window.location.pathname.indexOf(path) === 0 ? 'active': 'inactive')
    
}

const getClassName = (className) => {
  return (props.className !== undefined ? className: '')
}

const ListLink = props => (
    <li className={getActiveClassName(props.to) + ' ' + props.className} >
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
                    <ListLink to="/manifesto/" onClick={this.handleMobile} className="manifesto">M a n<br/>i<br/>f<br/>e s t o</ListLink>
                    <ListLink to="/experiments/" onClick={this.handleMobile} className="exp">E x p</ListLink>
                    <ListLink to="/work/" onClick={this.handleMobile} className="work">W o r k</ListLink>
                    <li>
                        <a href="mailto:hello@onut.art" onClick={this.handleMobile}>H i</a>
                    </li>
                </ul>
                <div className={`show-menu ${burgerActive}`} onClick={this.toggleMenu}></div>
                </section>
                <Logo className="logoMenu" onClick={this.handleMobile} />
            </section>
        )
    }
};

export default Menu