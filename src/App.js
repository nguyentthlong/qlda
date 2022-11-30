import React, { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Routess from './Routess';
import './App.css';
import { Dashboard } from './pages/Dashboard';
import { Tables } from './pages/Tables';
import { Hero404 } from './pages/Hero404';
import { Profile } from './pages/Profile';

function App() {
    return (
        <div>
            <Fragment>
                <Router>
                    <Routes>
                        {/* <Route path="/tables" element={<Tables />} />
                        <Route path="/hero404" element={<Hero404 />} />
                        <Route path="/profile" element={<Profile />} /> */}
                        <Route exact path="/" render={() => <Dashboard />} />
                        <Route path="/tables" component={Tables} />
                        <Route path="/hero404" component={Hero404} />
                        <Route path="/profile" component={Profile} />
                    </Routes>
                </Router>
            </Fragment>
        </div>
    );
}

export default App;
