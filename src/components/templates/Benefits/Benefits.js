import React, { Component } from 'react';
import './Benefits.css';

// Atoms
import Title from '../../atoms/Title/Title';
import Button from '../../atoms/Button/Button';

// Organisms
import List from '../../organisms/List/List';

class Benefits extends Component {
    render() {
        return (
            <section id="benefits" className={this.props.small ? "featurette" : "feature"}>
                <div className="container">
                    <div className="row">
                        <div className="side image">
                            <img src={'/images/stock/' + this.props.image} />
                        </div>
                        {/* <div className="side image" style={{background: 'url(/images/stock/' + this.props.image + ') no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>

                        </div> */}
                        <div className="side content">
                            <div className="side_features">
                                <Title title={this.props.title} />
                                {!this.props.small &&
                                    <p dangerouslySetInnerHTML={ { __html: this.props.content }}></p>
                                }
                                {this.props.overview
                                    ? <Button url={this.props.url} text={this.props.button}/>
                                    : <List list={this.props.list} />
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Benefits;