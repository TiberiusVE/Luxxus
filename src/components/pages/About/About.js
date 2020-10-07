import React from 'react';
import './About.css';

// Multi-language system
import { useTranslation } from 'react-i18next';

// Templates 
import Header from '../../templates/Header/Header';
import Intro from '../../templates/Intro/Intro';

function About () {
    
    const { t, i18n } = useTranslation();

    return (
        <main id="about">
            <Header title={t('AboutUs.Header.title')} about={t('AboutUs.Header.about')}/>
            <Intro 
                title={t('AboutUs.Intro.title')}
                content={t('AboutUs.Intro.content')}
            />
        </main>
    )
}

export default About;


