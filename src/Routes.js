import React, {useContext} from 'react';

import { Redirect, Route, Switch } from 'react-router-dom';

import HomepageScreen from './screen/HomepageScreen/HomepageScreen';
import RegisterScreen from './screen/RegisterScreen/RegisterScreen';
import LoginScreen from "./screen/LoginScreen/LoginScreen";
import UserContext from "./context/UserContext";
import UserProfileContainer from "./components/UserProfile/UserProfileContainer/UserProfileContainer";

function Routes() {

    const {user} = useContext(UserContext);

    return (
        <Switch>
            <Route path="/" exact={true}>
                <Redirect to="/home"/>
            </Route>
            <Route path='/home' exact={true}>
                <HomepageScreen/>
            </Route>
            <Route path='/registration' exact={true}>
                <RegisterScreen/>
            </Route>
            <Route path='/login' exact={true}>
                <LoginScreen/>
            </Route>
            <Route path='/:firstNameLastname' exact={true}>
                {user.email ? <UserProfileContainer/> : <Redirect to='/home'/>}
            </Route>
        </Switch>
    );
}

export default Routes;