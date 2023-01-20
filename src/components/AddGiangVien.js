import React, { useState } from 'react';
import { CDBInput } from 'cdbreact';
import Sidebar from '../Sidebar';
import Navbar from '../Navbar';
import GiangVienService from '../services/GiangVienService';
import { Link, useNavigate } from 'react-router-dom';

export const AddGiangVien = () => {
    const [idGiangVien, setIdGiangVien] = useState('');
    const [tenGiangVien, setTenGiangVien] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [birthday, setBirthday] = useState('');
    const [gender, setGender] = useState('');
    const [phone, setPhone] = useState('');
    const [hocVi, setHocVi] = useState('');
    const [chucVu, setChucVu] = useState('');
    //su dung useHistory hook de dieu huong
    const history = useNavigate();
    //e = event
    const saveGiangVien = (e) => {
        e.preventDefault();

        const giangvien = { idGiangVien, tenGiangVien, email, address, birthday, gender, phone, hocVi, chucVu };

        GiangVienService.createGiangVien(giangvien)
            .then((response) => {
                console.log(response.data);
                history('/giangvien');
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
                            <h4 className="font-weight-bold mb-3">Thêm giảng viên</h4>
                            <div className="form-group mb-2">
                                <label className="form-label"> Mã giảng viên</label>
                                <CDBInput
                                    type="number"
                                    placeholder=""
                                    color="danger"
                                    name="idGiangVien"
                                    value={idGiangVien}
                                    //e = event
                                    onChange={(e) => setIdGiangVien(e.target.value)}
                                ></CDBInput>
                                <div className="form-group mb-2">
                                    <label className="form-label"> Họ tên</label>
                                    <input
                                        type="text"
                                        placeholder=""
                                        color="secondary"
                                        name="tenGiangVien"
                                        className="form-control"
                                        value={tenGiangVien}
                                        onChange={(e) => setTenGiangVien(e.target.value)}
                                    ></input>
                                </div>

                                <div className="form-group mb-2">
                                    <label className="form-label"> Email</label>
                                    <input
                                        type="email"
                                        placeholder=""
                                        name="email"
                                        className="form-control"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    ></input>
                                </div>

                                <div className="form-group mb-2">
                                    <label className="form-label"> Địa chỉ</label>
                                    <input
                                        type="address"
                                        placeholder=""
                                        name="address"
                                        className="form-control"
                                        value={address}
                                        onChange={(e) => setAddress(e.target.value)}
                                    ></input>
                                </div>

                                <div className="form-group mb-2">
                                    <label className="form-label"> Ngày Sinh</label>
                                    <input
                                        type="date"
                                        placeholder=""
                                        name="birthday"
                                        className="form-control"
                                        value={birthday}
                                        onChange={(e) => setBirthday(e.target.value)}
                                    ></input>
                                </div>

                                <div className="form-group mb-2">
                                    <label className="form-label"> Giới tính</label>
                                    <input
                                        type="text"
                                        placeholder=""
                                        name="gender"
                                        className="form-control"
                                        value={gender}
                                        onChange={(e) => setGender(e.target.value)}
                                    ></input>
                                </div>

                                <div className="form-group mb-2">
                                    <label className="form-label"> Số điện thoại</label>
                                    <input
                                        type="number"
                                        placeholder=""
                                        name="phone"
                                        className="form-control"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                    ></input>
                                </div>

                                <div className="form-group mb-2">
                                    <label className="form-label"> Học vị</label>
                                    <input
                                        type="text"
                                        placeholder=""
                                        name="hocVi"
                                        className="form-control"
                                        value={hocVi}
                                        onChange={(e) => setHocVi(e.target.value)}
                                    ></input>
                                </div>

                                <div className="form-group mb-2">
                                    <label className="form-label"> Chức vụ</label>
                                    <input
                                        type="text"
                                        placeholder=""
                                        name="hocVi"
                                        className="form-control"
                                        value={chucVu}
                                        onChange={(e) => setChucVu(e.target.value)}
                                    ></input>
                                </div>

                                <button className="btn btn-success" onClick={(e) => saveGiangVien(e)}>
                                    Thêm
                                </button>
                                <Link to="/giangvien" className="btn btn-danger">
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
