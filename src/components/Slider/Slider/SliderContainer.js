import React, {useState} from 'react';

import SliderContent from "../SliderContent/SliderContent";
import Arrow from "../Arrow/Arrow";

import './SliderContainer.scss';

function SliderContainer() {

    const [activeIndex, setActiveIndex] = useState(0);

    const [translate, setTranslate] = useState(0);

    const images = [
        'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
        'https://images.unsplash.com/photo-1470341223622-1019832be824?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2288&q=80',
        'https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2094&q=80',
        'https://images.unsplash.com/photo-1534161308652-fdfcf10f62c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2174&q=80'
    ]

    const prevSlide = () => {
        if (activeIndex === 0) {
            setActiveIndex(images.length - 1);
            setTranslate((images.length - 1) * 100);
        }

        setActiveIndex(activeIndex - 1);
        setTranslate(activeIndex - 1);
    }

    const nextSlide = () => {
        if (activeIndex === images.length - 1) {
            setActiveIndex(0);
            setTranslate(0);
        }

        setActiveIndex(activeIndex + 1);
        setTranslate((activeIndex + 1) * 100);
    }

    console.log(activeIndex)

    return (
        <div className="slider-container">
            <SliderContent images={images} translate={translate}/>
            <Arrow direction="left" handleClick={prevSlide} />
            <Arrow direction="right" handleClick={nextSlide} />
        </div>
    );
}

export default SliderContainer;