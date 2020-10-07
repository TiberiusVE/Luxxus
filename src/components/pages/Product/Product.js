import React, { Component, Fragment } from 'react';
import './Product.css';

// Multi-language system
import { useTranslation } from 'react-i18next';

// Templates
import Header from '../../templates/Header/Header';
import Flow from '../../templates/Flow/Flow';
import Benefits from '../../templates/Benefits/Benefits';

function Product () {

    const { t, i18n } = useTranslation();

    return (
        <main id="product" className="overview">
            <Header title={t('Product.Header.title')} />
            <Flow logo="logo-only-black.svg"/>
            {t('Product.Benefits', { returnObjects: true }).map((product) => {
                return <Benefits overview={true} title={product.title} content={product.content} button={product.button} image={product.image} url={product.url} />
            })}
        </main>
    )
}

export default Product;