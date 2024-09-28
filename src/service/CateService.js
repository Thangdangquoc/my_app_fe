import axios from "../utils/axiosCustomize";

const listCate = () => {
  return axios.get(`api/category/get-list-all?page=1&size=100`);
};
const creatCate = (name, symbol, translate, description) => {
  let data = {
    name: name,
    symbol: symbol,
    translate: translate,
    description: description,
  };
  return axios.post("api/category/insert", data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
const deleteCate = (id) => {
  return axios.delete(`api/category/delete_param/${id}`);
};

export { listCate, creatCate, deleteCate };
