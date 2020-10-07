import React, { Component } from 'react';
import './Link.css';

const Link = props => (
    <a href={props.href}><span dangerouslySetInnerHTML={ { __html: props.title } } ></span></a>
)

export default Link;