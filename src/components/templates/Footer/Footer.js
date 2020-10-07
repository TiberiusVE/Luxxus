import React from 'react';
import logo from '../../../logo.svg'
import './Footer.css';

// Multi-language system
import { useTranslation } from 'react-i18next';

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

// Atoms
import Link from '../../atoms/Link/Link';

function Footer () {
    
    const { t, i18n } = useTranslation();

    return (
        <footer id="footer">
            <div className="container">
                <div className="row">
                    <div className="col_parent">
                        <a href="/" className="logo"><img src={logo} /></a>
                    </div>
                    <div className="col_parent">
                        <div className="row">
                            <div className="col_child">
                                <ul>
                                    <li><span>info@containn.com</span></li>
                                    <li><span>+1 (855) 340-2073</span></li>
                                </ul>
                            </div>
                            <div className="col_child">
                                <ul>
                                    <li><Link href="/product" title={t('Navbar.1')} /></li>
                                    <li><Link href="/solutions" title={t('Navbar.2')} /></li>
                                    {/* <li><Link href="/News" title="News" /></li>
                                    <li><Link href="/Blog" title="Blog" /></li> */}
                                    <li><Link href="/about" title={t('Navbar.3')} /></li>
                                    <li><Link href="mailto:info@containn.com" title={t('Navbar.4')} /></li>
                                </ul>
                            </div>
                        </div>
                        <div className="row">
                            {/* <span className="social_button">
                                <FontAwesomeIcon icon={faLinkedinIn} />
                            </span>
                            <span className="social_button">
                                <FontAwesomeIcon icon={faInstagram} />
                            </span> */}
                        </div>
                        <div className="row">
                            <Link href="#" title={t('Footer.1')} />
                            <span>{t('Footer.2')}</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;