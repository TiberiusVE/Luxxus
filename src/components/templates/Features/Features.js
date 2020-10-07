import React, { Component } from 'react';
import './Features.css';

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Features extends Component {
    render() {
        return (
            <section id="features" style={this.props.style}>
                <div className="container">
                    <div className="row">
                        <h1>{this.props.title}</h1>  {/* Main Title  */}
                        <p>{this.props.content}</p>  {/* Main Content  */}
                    </div>
                    <div className="row">  {/* Main Icons  */}
                        {this.props.flow.map((item, index) => {
                            return <div className="features_content" key={index}>
                                        <FontAwesomeIcon className="my-icon" icon={require("@fortawesome/pro-duotone-svg-icons")[item.icon]} />
                                        <span><h2 dangerouslySetInnerHTML={ { __html: item.title } }></h2></span>
                                   </div>
                        })}
                    </div>
                </div>
            </section>
        )
    }
}

export default Features;