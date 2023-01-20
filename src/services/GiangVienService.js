import axios from 'axios';

const GIANGVIEN_API_URL = 'http://localhost:8080/api/admin/giangvien';

class GiangVienService {
    getAllGiangVien() {
        return axios.get(GIANGVIEN_API_URL);
    }

    createGiangVien(giangvien) {
        return axios.post(GIANGVIEN_API_URL, giangvien);
    }

    getGiangVienById(giangvienId) {
        return axios.get(GIANGVIEN_API_URL + '/' + giangvienId);
    }

    updateGiangVien(giangvienId, giangvien) {
        return axios.put(GIANGVIEN_API_URL + '/' + giangvienId, giangvien);
    }

    deleteGiangVien(giangvienId) {
        return axios.delete(GIANGVIEN_API_URL + '/' + giangvienId);
    }
}

export default new GiangVienService();
