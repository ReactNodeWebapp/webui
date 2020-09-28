import React from 'react';
import { useHistory } from 'react-router';

import Footer from '../Footer';

function HeaderContainer() {

    const history = useHistory();

    const getLocation = () => {
        return (history.location.pathname.split("/")[1]);
    }

    return (
        <React.Fragment>
            <Footer option={getLocation()}/>
        </React.Fragment>
    )
}

export default HeaderContainer;
