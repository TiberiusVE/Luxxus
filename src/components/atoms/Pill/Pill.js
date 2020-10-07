import React from 'react';
import './Pill.css';

const Pill = props => (
    <span className="pill" style={{background: props.color}}>{props.title}</span>
)

export default Pill;