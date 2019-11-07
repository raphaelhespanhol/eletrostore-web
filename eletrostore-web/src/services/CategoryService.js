import axios from "axios";

const APP_NAME = "EletroStore/api";
const BASE_API_URL = `http://localhost:8080/${APP_NAME}`;
const CATEGORY_API_URL = `${BASE_API_URL}/categories`;

class CategoryService {
    retrieveAll() {
        return axios.get(`${CATEGORY_API_URL}`);
    }
}

export default new CategoryService();