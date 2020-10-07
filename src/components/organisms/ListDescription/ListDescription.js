import React, { Component } from 'react';
import './ListDescription.css';

// Multi-language system
import { useTranslation } from 'react-i18next';

// Atoms
import Title from '../../atoms/Title/Title';
import Button from '../../atoms/Button/Button'

function Description (props) {
        
    const { t, i18n } = useTranslation();

    return (
        <div className="list_description">
            <Title title={props.title} />
            <ul className="list_description_ul">
                {props.content.map((obj, idx) => {
                    return <li key={idx}>{obj}</li>
                })}
            </ul>
            {/* <p dangerouslySetInnerHTML={{ __html: props.content }}></p> */}
        </div>
    )
}

export default Description;