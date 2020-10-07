import React from 'react';
import './RealTime.css';

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

function RealTime () {

        const { t, i18n } = useTranslation();

        return (
            <main id="real_time">
                <Header title={t('RealTime.Header.title')}/>
                <Intro 
                    title={t('RealTime.Intro.title')} 
                    content={t('RealTime.Intro.content')}
                />
                <Flow logo="logo-only-white.svg"/>
                <Features 
                    title={t('RealTime.Features.title')}
                    flow={t('RealTime.Features.icons', { returnObjects: true })}
                />
                <Benefits 
                    title={t('RealTime.Benefits.title')}
                    content={t('RealTime.Benefits.content')}
                    list={t('RealTime.Benefits.list', { returnObjects: true })}
                    image={'stock22.jpg'} />
            </main>
        )

}

export default RealTime;


