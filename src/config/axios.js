import axios from "axios";
// const baseUrl = "http://localhost:8080";
// const baseUrl = "http://68.183.180.21:8080";
const api =axios.create({
  baseURL:"http://103.90.227.48:8080/api/"
});
//
// const config = {
//   baseUrl,
//   timeout: 3000000,
// };

//làm hành động gi đó
const handleBefore = (config) => {
  const token = localStorage.getItem("token");
  config.headers["Authorization"] = `Bearer ${token}`;
  return config;
};
const handleError = (error) => {
  console.log(error);

};
api.interceptors.request.use(handleBefore, handleError);
// api.interceptors.response.use(null, handleError);


export default api;
