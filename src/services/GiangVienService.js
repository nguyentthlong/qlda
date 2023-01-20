import axios from 'axios';

const GIANGVIEN_API_URL = 'http://localhost:8080/api/admin/giangvien';

class GiangVienService {
    getAllGiangVien() {
        return axios.get(GIANGVIEN_API_URL);
    }

    createGiangVien(giangvien) {
        return axios.post(GIANGVIEN_API_URL, giangvien);
    }

    // createLop(lop) {
    //     return axios.post(STUDENT_API_URL, lop);
    // }
}

export default new GiangVienService();
