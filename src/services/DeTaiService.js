import axios from 'axios';

const DETAI_API_URL = 'http://localhost:8080/api/admin/detai';

class DeTaiService {
    getAllDeTai() {
        return axios.get(DETAI_API_URL);
    }

    createDeTai(detai) {
        return axios.post(DETAI_API_URL, detai);
    }

    // createLop(lop) {
    //     return axios.post(STUDENT_API_URL, lop);
    // }
}

export default new DeTaiService();
