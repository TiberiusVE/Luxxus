import React, { Component } from 'react';
import './Header.css';

// Atoms
import Button from '../../atoms/Button/Button';

// Organisms
import SlideView from '../../organisms/SlideView/SlideView';

class Header extends Component {
    render() {
        return (
            <section id="header" className={this.props.home ? "home" : "appendix"}>
                <div className="container">
                    <div className="row">
                        <h1>{this.props.title}</h1>
                        {this.props.home &&
                            <SlideView slider={this.props.slider} />
                        }
                        {/* {this.props.about &&
                            <Button />
                        } */}
                    </div>
                </div>
            </section>
        )
    }
}

export default Header;