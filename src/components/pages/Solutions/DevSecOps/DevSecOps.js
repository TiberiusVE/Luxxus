import React from 'react';
import './DevSecOps.css';

// Multi-language system
import { useTranslation } from 'react-i18next';

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFingerprint } from '@fortawesome/pro-duotone-svg-icons';
import { faBoxAlt } from '@fortawesome/pro-duotone-svg-icons';
import { faClouds } from '@fortawesome/pro-duotone-svg-icons';
import { faContainerStorage } from '@fortawesome/pro-duotone-svg-icons';
import { faServer } from '@fortawesome/pro-duotone-svg-icons';
import { faBallotCheck } from '@fortawesome/pro-duotone-svg-icons';
import { faLockAlt } from '@fortawesome/pro-duotone-svg-icons';
import { faCheckCircle } from '@fortawesome/pro-duotone-svg-icons';
import { faCogs } from '@fortawesome/pro-duotone-svg-icons';
import { faDesktopAlt } from '@fortawesome/pro-duotone-svg-icons';
import { faImage } from '@fortawesome/pro-duotone-svg-icons';
import { faKey } from '@fortawesome/pro-duotone-svg-icons';
import { faNetworkWired } from '@fortawesome/pro-duotone-svg-icons';
// import { faFingerprint } from '@fortawesome/pro-duotone-svg-icons';
import { faMicrochip } from '@fortawesome/pro-duotone-svg-icons';
import { faUserSecret } from '@fortawesome/pro-duotone-svg-icons';
import { faListOl } from '@fortawesome/pro-duotone-svg-icons';
import { faKeyboard } from '@fortawesome/pro-duotone-svg-icons';
import { faLineHeight } from '@fortawesome/pro-duotone-svg-icons';
import { faDrawCircle } from '@fortawesome/pro-duotone-svg-icons';

// Templates 
import Header from '../../../templates/Header/Header';
import Intro from '../../../templates/Intro/Intro';
import Flow from '../../../templates/Flow/Flow';
import Features from '../../../templates/Features/Features';
import Benefits from '../../../templates/Benefits/Benefits';

function DevSecOps () {

    const { t, i18n } = useTranslation();

    return (
        <main id="dev_sec_ops">
            <Header title={t('DevSecOps.Header.title')}/>
            <Intro 
                title={t('DevSecOps.Intro.title')}
                content={t('DevSecOps.Intro.content')}
            />
            <Flow logo="logo-only-white.svg"/>
            <Features 
                title={t('DevSecOps.Features.title')}
                flow={t('DevSecOps.Features.icons', { returnObjects: true })}
            />
            <Benefits 
                title={t('DevSecOps.Benefits.title')}
                content={t('DevSecOps.Benefits.content')}
                list={t('DevSecOps.Benefits.list', { returnObjects: true })}
                image={'stock16.jpg'} />
        </main>
    )
}

export default DevSecOps;


