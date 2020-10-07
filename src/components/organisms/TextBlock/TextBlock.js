import React, { Component } from 'react';
import './TextBlock.css';

// Atoms
import Link from '../../atoms/Link/Link';

class TextBlock extends Component {
    render() {
        return (
            <div className="text_block">
                {this.props.list.map((item, index) => {
                    return <ul key={index}>
                            {item.elements.map((element) => {
                                return <li><Link title={element} /></li>
                            })}    
                            </ul>
                })}
            </div>
        )
    }
}

export default TextBlock;