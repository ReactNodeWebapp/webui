import React, {useEffect, useRef, useState} from "react";

import UpperHeaderContainer from "../UpperHeader/UpperHeaderContainer/UpperHeaderContainer";
import HeaderContainer from "../Header/HeaderContainer/HeaderContainer";

import './HeaderWrapper.scss';

function HeaderWrapper() {

    const [previousScroll, setPreviousScroll] = useState(0);

    const [currentScroll, setCurrentScroll] = useState(0);

    const [visible, setVisible] = useState(true);

    const checkScroll = () => {
        /*
        ** Find the direction of scroll
        ** 0 - initial, 1 - up, 2 - down
        */

        setCurrentScroll(window.pageYOffset);
        if (currentScroll > previousScroll && window.scrollY > 105) {
            // scrolled down
            setVisible(false);
        } else {
            // scrolled up
            setVisible(true);
        }

        setPreviousScroll(currentScroll);
    };

    useEffect(() => {
        window.addEventListener('scroll', checkScroll);
    });

    return (
        <div className={visible ? "header-nav" : "header-nav header-nav--hidden"}>
            <UpperHeaderContainer/>
            <HeaderContainer/>
        </div>
    );
}

export default HeaderWrapper;