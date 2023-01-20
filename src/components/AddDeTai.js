import React, { useState } from 'react';
import { CDBInput } from 'cdbreact';
import Sidebar from '../Sidebar';
import Navbar from '../Navbar';
import DeTaiService from '../services/DeTaiService';
import { Link, useNavigate } from 'react-router-dom';

export const AddDeTai = () => {
    const [idDT, setIdDT] = useState('');
    const [tenDT, setTenDT] = useState('');
    const [fileDT, setFileDT] = useState('');
    const [nam, setNam] = useState('');
    //su dung useHistory hook de dieu huong
    const history = useNavigate();
    //e = event
    const saveDetai = (e) => {
        e.preventDefault();

        const detai = { idDT, tenDT, fileDT, nam };

        DeTaiService.createDeTai(detai)
            .then((response) => {
                console.log(response.data);
                history('/detai');
            })
            .catch((error) => {
                console.log(error);
                alert('Nhập thông tin');
            });
    };

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
                            <h4 className="font-weight-bold mb-3">Thêm Đề Tài</h4>
                            <div className="form-group mb-2">
                                <label className="form-label"> Mã đề tài</label>
                                <CDBInput
                                    type="number"
                                    placeholder=""
                                    color="danger"
                                    name="idDT"
                                    value={idDT}
                                    //e = event
                                    onChange={(e) => setIdDT(e.target.value)}
                                ></CDBInput>
                                <div className="form-group mb-2">
                                    <label className="form-label">Tên đề tài</label>
                                    <input
                                        type="text"
                                        placeholder=""
                                        color="secondary"
                                        name="tenDT"
                                        className="form-control"
                                        value={tenDT}
                                        onChange={(e) => setTenDT(e.target.value)}
                                    ></input>
                                </div>

                                {/* Có thể xóa, chỉ để download */}
                                <div className="form-group mb-2">
                                    <label className="form-label"> File đề tài</label>
                                    <input
                                        type="text"
                                        placeholder=""
                                        name="fileDT"
                                        className="form-control"
                                        value={fileDT}
                                        onChange={(e) => setFileDT(e.target.value)}
                                    ></input>
                                </div>

                                <div className="form-group mb-2">
                                    <label className="form-label"> Ngày đăng ký</label>
                                    <input
                                        type="date"
                                        placeholder=""
                                        name="nam"
                                        className="form-control"
                                        value={nam}
                                        onChange={(e) => setNam(e.target.value)}
                                    ></input>
                                </div>

                                <button className="btn btn-success mx-2" onClick={(e) => saveDetai(e)}>
                                    Đồng ý
                                </button>
                                <Link to="/detai" className="btn btn-danger">
                                    Hủy
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
