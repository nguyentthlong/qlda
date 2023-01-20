import React, { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Routess from './Routess';
import './App.css';
import { Dashboard } from './pages/Dashboard';
import { Tables } from './pages/Tables';
import { Hero404 } from './pages/Hero404';
import { Profile } from './pages/Profile';
import Upload from './pages/Upload';
import { ListStudent } from './pages/ListStudent';
import { ListGiangVien } from './pages/ListGiangVien';
import { ListDeTai } from './pages/ListDeTai';
import { AddStudent } from './components/AddStudent';
import { AddGiangVien } from './components/AddGiangVien';
import { AddDeTai } from './components/AddDeTai';

function App() {
    return (
        <div>
            <Fragment>
                <Router>
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        {/* <Route exact path="/" render={() => <Dashboard />} /> */}
                        {/* <Route path="/tables" component={Tables} />
                        <Route path="/hero404" component={Hero404} />
                        <Route path="/profile" component={Profile} /> */}

                        <Route path="/tables" element={<Tables />} />
                        <Route path="/hero404" element={<Hero404 />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/upload" element={<Upload />} />
                        <Route path="/sinhvien" element={<ListStudent />} />
                        <Route path="/giangvien" element={<ListGiangVien />} />
                        <Route path="/detai" element={<ListDeTai />} />
                        <Route path="/add-sinhvien" element={<AddStudent />} />
                        <Route path="/add-giangvien" element={<AddGiangVien />} />
                        <Route path="/add-detai" element={<AddDeTai />} />
                    </Routes>
                </Router>
            </Fragment>
        </div>
    );
}

export default App;
