import React, { Component } from 'react';
import './Intro.css';

// Atoms
import Button from '../../atoms/Button/Button';

// Organisms 
import Description from '../../organisms/Description/Description';

class Intro extends Component {
    render() {
        return (
            <section id="intro" className={this.props.home ? "text home" : "text"}>
                <div className="container">
                    <div className="row">
                        <Description title={this.props.title} content={this.props.content} home={this.props.home} />
                    </div>
                </div>
            </section>
        )
    }
}

export default Intro;