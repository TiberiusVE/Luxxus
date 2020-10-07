import React, { Component } from 'react';
import './Navbar.css';

// Atoms
import Link from '../../atoms/Link/Link';

class Navbar extends Component {
    render() {
        return (
            <nav>
                <div className="nav_container">
                    <div className="logo">
                        <a href="/"><img src={this.props.logo} /></a>
                    </div>
                    <ul className="navbar">
                        <li><Link href="/product" title={this.props.t('Navbar.1')} /></li>
                        <li><Link href="/solutions" title={this.props.t('Navbar.2')} /></li>
                        <li><Link href="/events" title="Events" /></li>
                        {/* <li><Link href="/blog" title="Blog" /></li> */}
                        <li><Link href="/about" title={this.props.t('Navbar.3')} /></li>
                        <li><Link href="mailto:info@containn.com" title={this.props.t('Navbar.4')} /></li>
                        {/* <div className="multi-language">
                            <button onClick={() => this.props.handleClick('en')}>
                                <img src="/images/flags/united-states.svg" />
                            </button> 
                            <button onClick={() => this.props.handleClick('es')}>
                                <img src="/images/flags/germany.svg" />
                            </button> 
                        </div> */}
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar;
