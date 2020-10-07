import React from 'react';
import './Home.css';

// Multi-language system
import { useTranslation } from 'react-i18next';

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldCheck } from '@fortawesome/pro-duotone-svg-icons';
import { faBoxAlt } from '@fortawesome/pro-duotone-svg-icons';
import { faFingerprint } from '@fortawesome/pro-duotone-svg-icons';
import { faAnalytics } from '@fortawesome/pro-duotone-svg-icons';

// Templates 
import Header from '../../templates/Header/Header';
import Intro from '../../templates/Intro/Intro';
import Features from '../../templates/Features/Features';
import Benefits from '../../templates/Benefits/Benefits';

function Home () {

    const { t, i18n } = useTranslation();
            
    return (
        <main id="home">
            <Header home={t('Home.Intro.home')} slider={t('Home.Slider', { returnObjects: true })}/>
            <Intro 
                title={t('Home.Intro.title')}
                content={t('Home.Intro.content')} 
                home={t('Home.Intro.home')}
            />
            <Features 
                title={t('Home.Features.title')} 
                content={t('Home.Features.content')} 
                flow={t('Home.Flow', { returnObjects: true })}
            />
            <Benefits 
                title={t('Home.Benefits.title')}
                content={t('Home.Benefits.content')}
                list={t('Home.Benefits.list', { returnObjects: true })}
                image={'stock13.jpg'} />
        </main>
    )
}

export default Home;