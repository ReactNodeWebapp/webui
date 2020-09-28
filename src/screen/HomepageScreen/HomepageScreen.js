import React from 'react';

import Hero from '../../components/Hero/Hero';

import './HomepageScreen.scss';

function HomepageScreen() {
    return (
        <React.Fragment>
            <Hero height="100vh"/>
            <div style={{height: "1000px"}}></div>
        </React.Fragment>
    );
}

export default HomepageScreen;