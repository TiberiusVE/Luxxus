import React, { Component } from 'react';
import './List.css';

// Atoms
import Link from '../../atoms/Link/Link';

class List extends Component {
    render() {
        return (
            <div className="list">
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

export default List;