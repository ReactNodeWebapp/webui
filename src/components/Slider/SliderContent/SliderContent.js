import React from 'react';

import Slide from '../Slide/Slide';

import './SliderContent.scss';

function SliderContent({images, translate}) {
    return (
        <div
            className="slider-content"
            style={{width: images.length * 100 + "%", transform: `translateX(-${translate / images.length}%)`}}
        >
            {images.map((slide, i) => (
                <Slide key={slide + i} url={slide}/>
            ))}
        </div>
    )
}

export default SliderContent;