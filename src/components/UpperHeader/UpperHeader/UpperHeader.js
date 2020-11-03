import React from 'react';

import LanguageIcon from '@material-ui/icons/Language';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import PinDropIcon from '@material-ui/icons/PinDrop';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';

import './UpperHeader.scss';

function UpperHeader() {
    return (
        <nav className="upper-header">
            <div className="upper-header__services">
                <a href="/" className="upper-header__services-link">
                    <div className="upper-header__language-container">
                        <LanguageIcon className="upper-header__services-icon"/>
                        <span className="upper-header__language">English</span>
                    </div>
                </a>
                <a href="/" className="upper-header__services-link">
                    <div className="upper-header__help-container">
                        <HelpOutlineIcon className="upper-header__services-icon"/>
                        <span className="upper-header__help">How can we help You?</span>
                    </div>
                </a>
            </div>
            <div className="upper-header__user-tools">
                <PinDropIcon className="upper-header__user-tools-icon"/>
                <FavoriteBorderIcon className="upper-header__user-tools-icon"/>
                <PersonOutlineIcon className="upper-header__user-tools-icon"/>
            </div>
        </nav>
    );
}

export default UpperHeader;