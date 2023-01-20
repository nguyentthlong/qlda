import React, { useState } from 'react';
import { CDBInput } from 'cdbreact';
import Sidebar from '../Sidebar';
import Navbar from '../Navbar';
import StudentService from '../services/StudentService';
import { Link, useNavigate } from 'react-router-dom';

export const AddStudent = () => {
    const [msv, setMsv] = useState('');
    const [name, setName] = useState('');
    const [class_lop, setClass_lop] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [birthday, setBirthday] = useState('');
    const [gender, setGender] = useState('');
    const [phone, setPhone] = useState('');
    //su dung useHistory hook de dieu huong
    const history = useNavigate();
    //e = event
    const saveStudent = (e) => {
        e.preventDefault();

        const student = { msv, name, class_lop, email, address, birthday, gender, phone };

        StudentService.createStudent(student)
            .then((response) => {
                console.log(response.data);
                history('/sinhvien');
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
                            <h4 className="font-weight-bold mb-3">Thêm sinh viên</h4>
                            <div className="form-group mb-2">
                                <label className="form-label"> Mã Sinh Viên :</label>
                                <CDBInput
                                    type="number"
                                    placeholder=""
                                    color="danger"
                                    name="msv"
                                    value={msv}
                                    //e = event
                                    onChange={(e) => setMsv(e.target.value)}
                                ></CDBInput>
                                <div className="form-group mb-2">
                                    <label className="form-label"> Họ tên</label>
                                    <input
                                        type="text"
                                        placeholder=""
                                        color="secondary"
                                        name="name"
                                        className="form-control"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    ></input>
                                </div>

                                <div className="form-group mb-2">
                                    <label className="form-label"> Lớp</label>
                                    <input
                                        type="text"
                                        placeholder=""
                                        name="class_lop"
                                        className="form-control"
                                        value={class_lop}
                                        onChange={(e) => setClass_lop(e.target.value)}
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
                                <button className="btn btn-success" onClick={(e) => saveStudent(e)}>
                                    Thêm
                                </button>
                                <Link to="/sinhvien" className="btn btn-danger">
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
