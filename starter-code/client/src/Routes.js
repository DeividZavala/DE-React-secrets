import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {AuthSignupComponent, AuthLoginComponent, MyPrivatePageComponent} from './components/'; 

export const Routes = () => {
    return(
     
        <Switch>
            <Route path="/login" component={AuthLoginComponent} /> 
            <Route path="/signup" component={AuthSignupComponent} />
            <Route path="/private" component={MyPrivatePageComponent}/>
        </Switch>
       
    );
}