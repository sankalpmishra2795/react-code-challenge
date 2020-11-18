import React from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import Films from '../components/Planets/Films';
import Planets from '../components/Planets/Planets';
import Resident from '../components/Planets/Resident';
import NotFound from './NotFound';

const Routes = () => {
    return (
        <div>
            <Switch>
                <Route exact path='/' component={Planets} />
                <Route exact path='/films' component={Films} />
                <Route exact path='/residents' component={Resident} />
                <Route path='*' component={NotFound} />
            </Switch>
        </div>
    )
}

export default Routes