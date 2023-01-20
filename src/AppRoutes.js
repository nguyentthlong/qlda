import React, { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Dashboard } from './pages/Dashboard';
import { Tables } from './pages/Tables';
import { Error404 } from './pages/Error404';
import { Profile } from './pages/Profile';
import Upload from './pages/Upload';
import { ListStudent } from './pages/ListStudent';
import { ListGiangVien } from './pages/ListGiangVien';
import { ListDeTai } from './pages/ListDeTai';
import { AddStudent } from './components/AddStudent';
import { AddGiangVien } from './components/AddGiangVien';
import { AddDeTai } from './components/AddDeTai';
import { UploadFiles } from './components/UploadComponent';
import Login from './pages/Login/login';

const AppRoutes = () => {
    return (
        <Fragment>
            <Router>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/tables" element={<Tables />} />
                    <Route path="/error404" element={<Error404 />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/upload" element={<Upload />} />
                    <Route path="/sinhvien" element={<ListStudent />} />
                    <Route path="/giangvien" element={<ListGiangVien />} />
                    <Route path="/detai" element={<ListDeTai />} />
                    <Route path="/add-sinhvien" element={<AddStudent />} />
                    <Route path="/add-giangvien" element={<AddGiangVien />} />
                    <Route path="/add-detai" element={<AddDeTai />} />
                    {/* lấy ra Msv sau đó truyền vào title(bên AddStudent) gọi ra text  */}
                    <Route path="/edit-student/:Msv" element={<AddStudent />} />
                    <Route path="/edit-giangvien/:IdGiangVien" element={<AddGiangVien />} />

                    <Route path="/login" element={<Login />} />
                </Routes>
            </Router>
        </Fragment>
    );
};

export default AppRoutes;
