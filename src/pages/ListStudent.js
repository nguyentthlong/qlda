import React, { useEffect, useState } from 'react';
import { CDBCard, CDBCardBody, CDBDataTable, CDBContainer } from 'cdbreact';
import StudentService from '../services/StudentService';
import Sidebar from '../Sidebar';
import Navbar from '../Navbar';
import { Link } from 'react-router-dom';

export const ListStudent = () => {
    const [students, setStudents] = useState([]);
    // const [lops, setLop] = useState([]);

    useEffect(() => {
        getAllStudent();
    }, []);

    const getAllStudent = () => {
        StudentService.getAllStudent()
            .then((response) => {
                setStudents(response.data);
                // setLop(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const deleteStudent = (studentMsv) => {
        StudentService.deleteStudent(studentMsv)
            .then((response) => {
                getAllStudent();
            })
            .catch((error) => {
                console.log(error);
            });
        alert('Chụp lại ảnh vì không thể hoàn tác');
        // console.log(studentMsv);
    };

    // function getLopID(tenLop, lopID) {
    //     const lopIDDetails = lopID.find((item) => item.tenLop === tenLop);
    //     return lopIDDetails?.name || 'lopID not available';
    // }

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
                            <h2>Danh Sách Sinh Viên</h2>
                            <Link to="/add-sinhvien" className="btn btn-primary mb-2">
                                Thêm sinh viên
                            </Link>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Mã Sinh Viên</th>
                                        <th scope="col">Họ Tên</th>
                                        <th scope="col">Lớp</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Địa Chỉ</th>
                                        <th scope="col">Ngày Sinh</th>
                                        <th scope="col">Giới Tính</th>
                                        <th scope="col">Sđt</th>
                                        <th scope="col">Tùy Chỉnh</th>
                                    </tr>
                                </thead>
                                <tbody class="table-group-divider">
                                    {students.map((student) => (
                                        <tr key={student.msv}>
                                            <td>{student.msv}</td>
                                            <td>{student.name}</td>
                                            <td>{student.lopID?.tenLop}</td>
                                            <td>{student.email}</td>
                                            <td>{student.address}</td>
                                            <td>{student.birthday}</td>
                                            <td>{student.gender}</td>
                                            <td>{student.phone}</td>
                                            <td>
                                                <Link
                                                    className="btn btn-info mb-1 mx-1"
                                                    to={`/edit-student/${student.msv}`}
                                                >
                                                    Update
                                                </Link>
                                                <button
                                                    className="btn btn-danger mb-1 mx-1"
                                                    onClick={() => deleteStudent(student.msv)}
                                                >
                                                    Xóa
                                                </button>
                                            </td>
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

export default ListStudent;
