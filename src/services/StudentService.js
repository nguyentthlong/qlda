import axios from 'axios';

const STUDENT_API_URL = 'http://localhost:8080/api/admin/sinhvien';

class StudentService {
    getAllStudent() {
        return axios.get(STUDENT_API_URL);
    }

    //add
    createStudent(student) {
        return axios.post(STUDENT_API_URL, student);
    }

    //update
    //lay student tu msv
    getStudentByMsv(studentMsv) {
        return axios.get(STUDENT_API_URL + '/' + studentMsv);
    }

    updateStudent(studentMsv, student) {
        return axios.put(STUDENT_API_URL + '/' + studentMsv, student);
    }

    deleteStudent(studentMsv) {
        return axios.delete(STUDENT_API_URL + '/' + studentMsv);
    }
}

export default new StudentService();
