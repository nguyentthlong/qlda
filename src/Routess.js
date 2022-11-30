import React, { Fragment } from 'react';
import { BrowserRouter as Routes, Route } from 'react-router-dom';
import { Dashboard } from './pages/Dashboard';
import { Tables } from './pages/Tables';
import { Hero404 } from './pages/Hero404';
import { Profile } from './pages/Profile';

const Routess = () => {
    return (
        <Fragment>
            <Routes>
                <Route exact path="/" render={() => <Dashboard />} />
                <Route path="/tables" component={Tables} />
                <Route path="/hero404" component={Hero404} />
                <Route path="/profile" component={Profile} />
            </Routes>
        </Fragment>
    );
};

export default Routess;
