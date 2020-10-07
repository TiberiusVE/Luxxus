import React, { Component, Fragment } from 'react';
import './CloudBuilder.css';

// Multi-language system
import { useTranslation } from 'react-i18next';

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFingerprint } from '@fortawesome/pro-duotone-svg-icons';
import { faBoxAlt } from '@fortawesome/pro-duotone-svg-icons';
import { faClouds } from '@fortawesome/pro-duotone-svg-icons';
import { faContainerStorage } from '@fortawesome/pro-duotone-svg-icons';
import { faLockAlt } from '@fortawesome/pro-duotone-svg-icons';
import { faCheckCircle } from '@fortawesome/pro-duotone-svg-icons';
import { faServer } from '@fortawesome/pro-duotone-svg-icons';
import { faBallotCheck } from '@fortawesome/pro-duotone-svg-icons';

// Templates 
import Header from '../../../templates/Header/Header';
import Intro from '../../../templates/Intro/Intro';
import Flow from '../../../templates/Flow/Flow';
import Features from '../../../templates/Features/Features';
import Benefits from '../../../templates/Benefits/Benefits';

function CloudBuilder () {

    const { t, i18n } = useTranslation();

    return (
        <main id="cloud_builder">
            <Header title={t('CloudBuilder.Header.title')}/>
            <Intro 
                title={t('CloudBuilder.Intro.title')} 
                content={t('CloudBuilder.Intro.content')}
            /> 
            <Flow logo="logo-only-white.svg"/>
            <Features 
                title={t('CloudBuilder.Features.title')}
                flow={t('CloudBuilder.Features.icons', { returnObjects: true })}
            /> 
            <Benefits 
                title={t('CloudBuilder.Benefits.title')}
                content={t('CloudBuilder.Benefits.content')}
                list={t('CloudBuilder.Benefits.list', { returnObjects: true })}
                image={'stock8.jpg'} />
        </main>
    )
}

export default CloudBuilder;


