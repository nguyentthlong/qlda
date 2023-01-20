import React from 'react';
import { CDBBtn, CDBProgress, CDBTable, CDBTableHeader, CDBTableBody, CDBContainer, CDBLink } from 'cdbreact';
import { Pie, Bar } from 'react-chartjs-2';
import Sidebar from '../Sidebar';
import Navbar from '../Navbar';
import './Dashboard.css';

export const Dashboard = () => {
    return (
        <div className="dashboard d-flex">
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
                            <div className="cards-container2">
                                <div>
                                    <div className="card shadow border-10">
                                        <div className="p-3 d-flex flex-column align-items-center mb-4 text-center">
                                            <h4 className="card-title mb-2" style={{ fontWeight: '600' }}>
                                                Sinh Viên
                                            </h4>
                                            <p className="text-justify mt-4">
                                                <strong className="mb-2">Số lượng sinh viên tham gia </strong>
                                            </p>
                                            <h1 className="card-title mb-1">
                                                <span style={{ fontWeight: '600' }}>100</span>
                                            </h1>
                                        </div>
                                        <div className="card-body">
                                            <div className=" justify-content-end">
                                                <CDBBtn color=" dark" outline>
                                                    More
                                                </CDBBtn>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <br></br>
                                <br></br>
                                <br></br>
                                <div>
                                    <div className="card shadow border-0">
                                        <div className="p-3 d-flex flex-column align-items-center mb-4 text-center">
                                            <h4 className="card-title mb-2" style={{ fontWeight: '600' }}>
                                                Giảng Viên
                                            </h4>
                                            <p className="text-justify mt-4">
                                                <strong className="mb-2">Số lượng giảng viên tham gia </strong>
                                            </p>
                                            <h1 className="card-title mb-1">
                                                <span style={{ fontWeight: '600' }}>20</span>
                                            </h1>
                                        </div>
                                        <div className="card-body">
                                            <div className=" justify-content-end">
                                                <CDBBtn color=" dark" outline>
                                                    More
                                                </CDBBtn>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <footer className="d-flex mx-auto py-4">
                                <small className="mx-auto my-1 text-center">&copy; Thanh Long</small>
                            </footer> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
