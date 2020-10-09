import React from 'react';

import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import './Footer.scss';

function Footer() {


    return (
        <>
            <div className="top-footer">
                <p>Need help? Call our support team anytime at <span>(385) 052 123 456</span></p>
            </div>
            <footer className="footer">
                <div className="footer__top-container">
                    <div className="footer__logo-wrapper">
                        <h4 className="footer__logo">Wilkinson</h4>
                        <p className="footer__slogan">Unlimited Transactions with zero fees.</p>
                    </div>
                    <div className="footer__list-wrapper">
                        <ul className="footer__column">
                            <li><h6 className="footer__column-title">Products</h6></li>
                            <li>Pricing</li>
                            <li>Teams</li>
                            <li>Education</li>
                            <li>Updates</li>
                        </ul>
                        <ul className="footer__column">
                            <li><h6 className="footer__column-title">Features</h6></li>
                            <li>Overview</li>
                            <li>Design</li>
                            <li>Code</li>
                            <li>Collaborate</li>
                        </ul>
                        <ul className="footer__column">
                            <li><h6 className="footer__column-title">Get Started</h6></li>
                            <li>Sign Up</li>
                            <li>Sign In</li>
                            <li>Collaborate</li>
                        </ul>
                        <ul className="footer__column">
                            <li><h6 className="footer__column-title">About</h6></li>
                            <li>Contact</li>
                            <li>Blog</li>
                            <li>Careers</li>
                            <li>Blog</li>
                        </ul>
                    </div>
                </div>
                <div className="footer__bottom-container">
                    <p className="footer__copyright">&copy; 2020 All rights reserved.</p>
                    <ul>
                        <li>
                            <a href="https://www.facebook.com"><FacebookIcon fontSize={"small"}/></a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com"><InstagramIcon fontSize={"small"}/></a>
                        </li>
                        <li>
                            <a href="https://www.twitter.com"><TwitterIcon fontSize={"small"}/></a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com"><LinkedInIcon fontSize={"small"}/></a>
                        </li>
                    </ul>
                </div>
            </footer>
        </>
    );
}

export default Footer;

