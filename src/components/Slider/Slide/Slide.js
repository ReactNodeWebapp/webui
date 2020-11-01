import React from 'react';

import './Slide.scss';

function Slide({url}) {
    return (
        <div
            className="slide"
            style={{backgroundImage: "url(" + url + ")"}}
        />
    )
}

export default Slide;