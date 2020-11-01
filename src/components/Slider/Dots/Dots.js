import React from "react";

import './Dots.scss';

function Dot({active}) {
    return (
        <span
            className="dot"
            style={active ? { backgroundColor: "white"} : {backgroundColor: "hsla(0, 0%, 100%, .7)"}}
        />
    );
}

function Dots({images, activeIndex}) {
    return (
        <div className="dots-container">
            {images.map((slide, i) => (
                <Dot key={slide + i} active={activeIndex === i}/>
            ))};
        </div>
    );
}

export default Dots;