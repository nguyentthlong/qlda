import axios from 'axios';

const USER_API_URL = 'http://localhost:8080/api/admin/user';

class UserService {
    getAllEmployees() {
        return axios.get(USER_API_URL);
    }

    createEmployee(employee) {
        return axios.post(USER_API_URL, user);
    }

    getEmployeeById(userId) {
        return axios.get(USER_API_URL + '/' + userId);
    }

    updateEmployee(userId, user) {
        return axios.put(USER_API_URL + '/' + userId, user);
    }

    deleteEmployee(employeeId) {
        return axios.delete(USER_API_URL + '/' + userId);
    }
}

export default new UserService();
