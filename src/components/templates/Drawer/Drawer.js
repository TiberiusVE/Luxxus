import React, { Component } from 'react';
import './Drawer.css';

// Atoms
import Link from '../../atoms/Link/Link';

class Drawer extends Component {
    render() {
        return (
            <nav className={'drawer' + (this.props.show ? ' open' : '')}>
                <ul>
                    <li><Link href="/" title="Home" /></li>
                    <li><Link href="/product" title="Product" /></li>
                    <li><Link href="/solutions" title="Solutions" /></li>
                    <li><Link href="/about" title="About Us" /></li>
                    <li><Link href="mailto:info@containn.com" title="Contact Us" /></li>
                </ul>
            </nav>
        )
    }
}

export default Drawer;