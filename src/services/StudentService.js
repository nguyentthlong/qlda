import axios from 'axios';

const STUDENT_API_URL = 'http://localhost:8080/api/admin/sinhvien';

class StudentService {
    getAllStudent() {
        return axios.get(STUDENT_API_URL);
    }

    createStudent(student) {
        return axios.post(STUDENT_API_URL, student);
    }

    // createLop(lop) {
    //     return axios.post(STUDENT_API_URL, lop);
    // }
}

export default new StudentService();
