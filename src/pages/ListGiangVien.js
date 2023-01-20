import React, { useEffect, useState } from 'react';
import { CDBCard, CDBCardBody, CDBDataTable, CDBContainer } from 'cdbreact';
import GiangVienService from '../services/GiangVienService';
import Sidebar from '../Sidebar';
import Navbar from '../Navbar';
import { Link } from 'react-router-dom';

export const ListGiangVien = () => {
    const [giangvien, setGiangVien] = useState([]);

    useEffect(() => {
        getAllGiangVien();
    }, []);

    const getAllGiangVien = () => {
        GiangVienService.getAllGiangVien()
            .then((response) => {
                setGiangVien(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const deleteGiangVien = (giangvienId) => {
        GiangVienService.deleteGiangVien(giangvienId)
            .then((response) => {
                getAllGiangVien();
            })
            .catch((error) => {
                console.log(error);
            });
        // alert('Chụp lại ảnh vì không thể hoàn tác');
        // console.log(giangvienId);
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
                            <h2>Danh Sách Giảng Viên</h2>
                            <Link to="/add-giangvien" className="btn btn-primary mb-2">
                                Thêm giảng viên
                            </Link>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Mã Giảng Viên</th>
                                        <th scope="col">Họ Tên</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Địa Chỉ</th>
                                        <th scope="col">Ngày Sinh</th>
                                        <th scope="col">Giới Tính</th>
                                        <th scope="col">Sđt</th>
                                        <th scope="col">Chức vụ</th>
                                        <th scope="col">Học vị</th>
                                        <th scope="col">Tùy Chỉnh</th>
                                    </tr>
                                </thead>
                                <tbody class="table-group-divider">
                                    {giangvien.map((giangvien) => (
                                        <tr key={giangvien.idGiangVien}>
                                            <td>{giangvien.idGiangVien}</td>
                                            <td>{giangvien.tenGiangVien}</td>
                                            <td>{giangvien.email}</td>
                                            <td>{giangvien.address}</td>
                                            <td>{giangvien.birthday}</td>
                                            <td>{giangvien.gender}</td>
                                            <td>{giangvien.phone}</td>
                                            <td>{giangvien.hocVi}</td>
                                            <td>{giangvien.chucVu}</td>
                                            <td>
                                                <Link
                                                    className="btn btn-info mb-1 mx-1"
                                                    to={`/edit-giangvien/${giangvien.idGiangVien}`}
                                                >
                                                    Update
                                                </Link>
                                                <button
                                                    className="btn btn-danger mb-1 mx-1"
                                                    onClick={() => deleteGiangVien(giangvien.idGiangVien)}
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

export default ListGiangVien;
