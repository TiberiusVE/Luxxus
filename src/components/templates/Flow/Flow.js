import React from 'react';
import './Flow.css';

// Multi-language system
import { useTranslation } from 'react-i18next';

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import { faLongArrowAltDown } from '@fortawesome/free-solid-svg-icons';

// Organisms
import Description from '../../organisms/Description/Description';

function Flow (props) {
    
    const { t, i18n } = useTranslation();

    return (
        <section id="flow">
            <div className="container">
                <div className="row">
                    <Description title={t('Flow.Description.title')} content={t('Flow.Description.content')} />
                </div>
                <div className="row">
                    {t('Flow.Steps', { returnObjects: true }).map((flow, index) => {
                        return <div className="flow_wrap" key={index}>
                                    <div class="flow_content">
                                        <span>
                                            <h2 dangerouslySetInnerHTML={ { __html: flow.title }} ></h2>
                                            {flow.containn
                                                ? <img className="logo-only" src={require('../../../' + props.logo)} />
                                                : <FontAwesomeIcon className="my-icon" icon={require("@fortawesome/pro-duotone-svg-icons")[flow.icon]} />
                                            }
                                        </span>
                                    </div>
                                    {flow.arrow && 
                                        <span>
                                            <FontAwesomeIcon className="my-icon arrow-flow" icon={faLongArrowAltRight} />
                                            <FontAwesomeIcon className="my-icon arrow-mobile" icon={faLongArrowAltDown} />
                                        </span>
                                    }
                                </div>
                    })}
                </div>
            </div>
        </section>
    )
}

export default Flow;