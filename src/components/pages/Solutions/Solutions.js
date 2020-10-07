import React from 'react';
import './Solutions.css';

// Multi-language system
import { useTranslation } from 'react-i18next';

// Templates
import Header from '../../templates/Header/Header';
import Intro from '../../templates/Intro/Intro';
import Benefits from '../../templates/Benefits/Benefits';

function Solutions () {

    const { t, i18n } = useTranslation();

    return (
        <main id="solution" className="overview">
            <Header title={t('Solutions.Header.title')} />
            <Intro title={t('Solutions.Intro.title')} content={t('Solutions.Intro.content')} />
            {t('Solutions.Benefits', { returnObjects: true }).map((solution) => {
                return <Benefits 
                        overview={true} 
                        title={solution.title} 
                        content={solution.content} 
                        button={solution.button} 
                        image={solution.image} 
                        url={solution.url} 
                        />
            })}
        </main>
    )
}

export default Solutions;