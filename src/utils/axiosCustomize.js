import axios from "axios";
// const API_ENDPOINT = window.env.API;
const instance = axios.create({
  baseURL: `http://10.2.22.108:9090/`,
});
export default instance;
