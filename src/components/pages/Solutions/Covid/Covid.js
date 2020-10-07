import React from 'react';
import './Covid.css';

// Multi-language system
import { useTranslation } from 'react-i18next';

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFingerprint } from '@fortawesome/pro-duotone-svg-icons';
import { faBoxAlt } from '@fortawesome/pro-duotone-svg-icons';
import { faShieldAlt } from '@fortawesome/pro-duotone-svg-icons';
import { faLockAlt } from '@fortawesome/pro-duotone-svg-icons';
import { faCheckCircle } from '@fortawesome/pro-duotone-svg-icons';
import { faBallotCheck } from '@fortawesome/pro-duotone-svg-icons';
import { faChartBar } from '@fortawesome/pro-duotone-svg-icons';
import { faClipboardList } from '@fortawesome/pro-duotone-svg-icons';
import { faCheckSquare } from '@fortawesome/pro-duotone-svg-icons';
import { faServer } from '@fortawesome/pro-duotone-svg-icons';

// Templates 
import Header from '../../../templates/Header/Header';
import Intro from '../../../templates/Intro/Intro';
import Flow from '../../../templates/Flow/Flow';
import Features from '../../../templates/Features/Features';
import Benefits from '../../../templates/Benefits/Benefits';

function Covid () {

    const { t, i18n } = useTranslation();
        
    return (
        <main id="covid">
            <Header title={t('Covid.Header.title')}/>
            <Intro 
                title={t('Covid.Intro.title')} 
                content={t('Covid.Intro.content')}
            />
            <Flow logo="logo-only-white.svg"/>
            <Features 
                title={t('Covid.Features.title')}
                flow={t('Covid.Features.icons', { returnObjects: true })}
            />
            <Benefits 
                title={t('Covid.Benefits.title')}
                content={t('Covid.Benefits.content')}
                list={t('Covid.Benefits.list', { returnObjects: true })}
                image={'stock23.jpg'} />
        </main>
    )
}

export default Covid;


