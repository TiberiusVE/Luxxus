import React, { Component, Fragment } from 'react';
import './ContainerVM.css';

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

function ContainerVM () {

    const { t, i18n } = useTranslation();

    return (
        <main id="container_vms">
            <Header title={t('ContainerVM.Header.title')}/>
            <Intro 
                title={t('ContainerVM.Intro.title')} 
                content={t('ContainerVM.Intro.content')}
            />
            <Flow logo="logo-only-white.svg"/>
            <Features 
                title={t('ContainerVM.Features.title')}
                flow={t('ContainerVM.Features.icons', { returnObjects: true })}
            />
            <Benefits 
                title={t('ContainerVM.Benefits.title')}
                content={t('ContainerVM.Benefits.content')}
                list={t('ContainerVM.Benefits.list', { returnObjects: true })}
                image={'stock18.jpg'} />
        </main>
    )
}

export default ContainerVM;


