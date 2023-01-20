import React, { useEffect, useState } from 'react';
import { CDBBtn, CDBProgress, CDBTable, CDBTableHeader, CDBTableBody, CDBContainer, CDBLink } from 'cdbreact';
import Sidebar from '../Sidebar';
import Navbar from '../Navbar';
import './Profile.css';
import { Link } from 'react-router-dom';

export const Profile = () => {
    return (
        <div className="d-flex profile">
            <div>
                <Sidebar />
            </div>
            <div
                style={{ flex: '1 1 auto', display: 'flex', flexFlow: 'column', height: '100vh', overflowY: 'hidden' }}
            >
                <Navbar />
                <div style={{ height: '100%' }}>
                    <div style={{ height: 'calc(100% - 64px)', padding: '20px 5%', overflowY: 'scroll' }}>
                        <div style={{ margin: '0 auto', maxWidth: '1320px' }}>
                            <div className="mt-5 w-100">
                                <h2>Thông tin tài khoản</h2>
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Họ Tên</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">Địa Chỉ</th>
                                            <th scope="col">Ngày Sinh</th>
                                            <th scope="col">Giới Tính</th>
                                            <th scope="col">Sđt</th>
                                        </tr>
                                    </thead>
                                    {/* <tbody class="table-group-divider">
                                        {students.map((student) => (
                                            <tr key={student.msv}>
                                                <td>{student.msv}</td>
                                                <td>{student.name}</td>
                                                <td>{student.email}</td>
                                                <td>{student.address}</td>
                                                <td>{student.birthday}</td>
                                                <td>{student.gender}</td>
                                                <td>{student.phone}</td>
                                            </tr>
                                        ))}
                                    </tbody> */}
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
