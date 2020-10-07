import React from 'react';
import './Events.css';

// Multi-language system
import { useTranslation } from 'react-i18next';

// Atoms
import Card from '../../atoms/Card/Card';

// Organisms
import Articles from '../../organisms/Articles/Articles';

// Templates
import Header from '../../templates/Header/Header';
import Intro from '../../templates/Intro/Intro';

function Events () {

    const { t, i18n } = useTranslation();

    return (
        <main id="events" className="overview">
            <Header title="Events" />
            <Card>
                <Articles />
            </Card>
            <Card style={{flexDirection: "row-reverse"}}>
                <Articles />
            </Card>
        </main>
    )
    
}

export default Events;