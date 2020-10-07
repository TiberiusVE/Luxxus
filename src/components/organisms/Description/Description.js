import React, { Component } from 'react';
import './Description.css';

// Multi-language system
import { useTranslation } from 'react-i18next';

// Atoms
import Title from '../../atoms/Title/Title';
import Button from '../../atoms/Button/Button'

function Description (props) {
        
    const { t, i18n } = useTranslation();

    return (
        <div className="description">
            <Title title={props.title} />
            <p dangerouslySetInnerHTML={{ __html: props.content }}></p>
            {props.home && 
                <Button url="/product" text={t('Home.Intro.button')} colored={false} />
            }
        </div>
    )
}

export default Description;