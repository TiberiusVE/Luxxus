import React from 'react';
import './Title.css';

const Title = props => (
    <h1 dangerouslySetInnerHTML={ { __html: props.title }}></h1>
);

export default Title;