import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:8080",
});

const apis = {
    getAllMahasiswa: () => api.get('/mahasiswa'),
    getMahasiswaByNim: (nim) => api.get('/mahasiswa/$(nim'),
};

export default apis;