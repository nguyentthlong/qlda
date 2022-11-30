import React, { useEffect, useState } from 'react';
import StudentService from '../services/StudentService';

export const ListStudent = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        StudentService.getAllStudent()
            .then((response) => {
                setStudents(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div className="container">
            <h2>Danh Sách Sinh Viên</h2>
            <table class="table table-secondary">
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
                    </tr>
                </thead>
                <tbody class="table-group-divider">
                    {students.map((student) => (
                        <tr key={student.msv}>
                            <td>{student.msv}</td>
                            <td>{student.name}</td>
                            <td>{student.class_lop}</td>
                            <td>{student.email}</td>
                            <td>{student.address}</td>
                            <td>{student.birthday}</td>
                            <td>{student.gender}</td>
                            <td>{student.phone}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ListStudent;
