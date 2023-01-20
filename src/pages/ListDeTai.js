import React, { useEffect, useState } from 'react';
import { CDBCard, CDBCardBody, CDBDataTable, CDBContainer } from 'cdbreact';
import DeTaiService from '../services/DeTaiService';
import Sidebar from '../Sidebar';
import Navbar from '../Navbar';
import { Link } from 'react-router-dom';

export const ListDeTai = () => {
    const [detai, setDeTai] = useState([]);

    useEffect(() => {
        DeTaiService.getAllDeTai()
            .then((response) => {
                setDeTai(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div className="d-flex">
            <div>
                <Sidebar />
            </div>
            <div
                style={{ flex: '1 1 auto', display: 'flex', flexFlow: 'column', height: '100vh', overflowY: 'hidden' }}
            >
                <Navbar />
                <div style={{ height: '100%' }}>
                    <div style={{ padding: '20px 5%', height: 'calc(100% - 64px)', overflowY: 'scroll' }}>
                        <div className="mt-5 w-100">
                            <h2>Danh Sách Đề Tài</h2>
                            <Link to="/add-detai" className="btn btn-primary mb-2">
                                Add
                            </Link>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Tên đề tài</th>
                                        <th scope="col">File đồ án</th>
                                        <th scope="col">Ngày đăng ký</th>
                                        <th scope="col">Download</th>
                                    </tr>
                                </thead>
                                <tbody class="table-group-divider">
                                    {detai.map((detai) => (
                                        <tr key={detai.idDT}>
                                            <td>{detai.tenDT}</td>
                                            <td>{detai.fileDT}</td>
                                            <td>{detai.nam}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListDeTai;
