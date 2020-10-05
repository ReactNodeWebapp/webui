import React, {useContext} from 'react';

import { Redirect, Route, Switch } from 'react-router-dom';

import HomepageScreen from './screen/HomepageScreen/HomepageScreen';
import RegisterScreen from './screen/RegisterScreen/RegisterScreen';
import LoginScreen from "./screen/LoginScreen/LoginScreen";
import UserContext from "./context/UserContext";
import UserProfileScreen from "./screen/UserProfileScreen/UserProfileScreen";

function Routes() {

    const {user} = useContext(UserContext);

    return (
        <Switch>
            <Route path="/" exact={true}>
                <Redirect to="/home"/>
            </Route>
            <Route path='/home'>
                <HomepageScreen/>
            </Route>
            <Route path='/registration'>
                <RegisterScreen/>
            </Route>
            <Route path='/login'>
                <LoginScreen/>
            </Route>
            <Route path='/:firstNameLastname'>
                {user.email !== '' ? <UserProfileScreen/> : <Redirect to='/home'/>}
            </Route>
        </Switch>
    );
}

export default Routes;