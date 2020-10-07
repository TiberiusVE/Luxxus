import React, { Component } from 'react';
import './Button.css';

const Button = props => (
    <a href={props.url} className={'c_button' + (props.colored ? ' colored' : '') }><span>{props.text}</span></a>

)

export default Button;