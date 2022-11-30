import axios from 'axios';

const STUDENT_API_URL = 'http://localhost:8080/api/admin/student';

class StudentService {
    getAllStudent() {
        return axios.get(STUDENT_API_URL);
    }
}

export default new StudentService();
