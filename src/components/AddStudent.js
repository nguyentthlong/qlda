import React, { useEffect, useState } from 'react';
import { CDBInput } from 'cdbreact';
import Sidebar from '../Sidebar';
import Navbar from '../Navbar';
import StudentService from '../services/StudentService';
import { Link, useNavigate, useParams } from 'react-router-dom';

export const AddStudent = () => {
    const [msv, setMsv] = useState('');
    const [name, setName] = useState('');
    const [lopID, setLopID] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [birthday, setBirthday] = useState('');
    const [gender, setGender] = useState('');
    const [phone, setPhone] = useState('');
    const [detaiID, setDetaiID] = useState('');
    const { Msv } = useParams();
    //su dung useHistory hook de dieu huong
    const history = useNavigate();

    //e = event
    const saveOrUpdateStudent = (e) => {
        e.preventDefault();
        //bug
        const student = { msv, name, email, address, birthday, gender, phone };

        if (Msv) {
            StudentService.updateStudent(Msv, student)
                .then((response) => {
                    history('/sinhvien');
                })
                .catch((error) => {
                    console.log(error);
                    alert('Nhập Mã Sinh Viên');
                });
        } else {
            StudentService.createStudent(student)
                .then((response) => {
                    console.log(response.data);
                    history('/sinhvien');
                })
                .catch((error) => {
                    console.log(error);
                    alert('Nhập thông tin');
                });
        }
    };

    useEffect(() => {
        StudentService.getStudentByMsv(Msv)
            .then((response) => {
                // setMsv(response.data.msv);
                setName(response.data.name);
                setEmail(response.data.email);
                setAddress(response.data.address);
                setBirthday(response.data.birthday);
                setGender(response.data.gender);
                setPhone(response.data.phone);
                // setLopID(response.data.lopID);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const title = () => {
        //Msv gọi bên router lấy ra text
        if (Msv) {
            return <h2 className="text-center">Sửa Thông Tin Sinh Viên</h2>;
        } else {
            return <h2 className="text-center">Thêm Sinh Viên</h2>;
        }
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
                            {/* <h4 className="font-weight-bold mb-3">Thêm sinh viên</h4> */}
                            {title()}
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
                                        name="lopID"
                                        className="form-control"
                                        value={lopID}
                                        onChange={(e) => setLopID(e.target.value)}
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

                                {/* <div className="form-group mb-2">
                                    <label className="form-label"> id Đề Tài</label>
                                    <input
                                        type="number"
                                        placeholder=""
                                        name="detaiID"
                                        className="form-control"
                                        value={detaiID}
                                        onChange={(e) => setDetaiID(e.target.value)}
                                    ></input>
                                </div> */}

                                <button className="btn btn-success mx-2" onClick={(e) => saveOrUpdateStudent(e)}>
                                    Đồng ý
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
