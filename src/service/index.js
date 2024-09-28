// import axios from "axios";
// import { getItem } from "src/helpers/localStorageControl";
// import { logOut } from "src/store/authentication/actionCreator";
// import store from "src/store";
// import { createStandaloneToast } from "@chakra-ui/react";

// const toast = createStandaloneToast();

// const API_ENDPOINT = window.env.API;
// // const dispatch = useDispatch()

// const authHeader = () => ({
//   Authorization: `Bearer ${getItem("access_token")}`,
// });

// const client = axios.create({
//   baseURL: API_ENDPOINT,
//   withCredentials: false,
//   headers: {
//     Authorization: `${getItem("access_token")}`,
//     "Content-Type": "application/json",
//     "Access-Control-Allow-Origin": "*",
//     "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
//     "Access-Control-Allow-Headers":
//       "Origin, X-Requested-With, Content-Type, Accept",
//   },
// });

// class DataService {
//   static get(path = "") {
//     return client({
//       method: "GET",
//       url: path,
//       headers: { ...authHeader() },
//     });
//   }

//   static post(path = "", data = {}, optionalHeader = {}) {
//     return client({
//       method: "POST",
//       url: path,
//       data,
//       headers: { ...authHeader(), ...optionalHeader },
//     });
//   }

//   static patch(path = "", data = {}) {
//     return client({
//       method: "PATCH",
//       url: path,
//       data: JSON.stringify(data),
//       headers: { ...authHeader() },
//     });
//   }

//   static put(path = "", data = {}) {
//     return client({
//       method: "PUT",
//       url: path,
//       data: JSON.stringify(data),
//       headers: { ...authHeader() },
//     });
//   }

//   static delete(path = "", data = {}) {
//     return client({
//       method: "DELETE",
//       url: path,
//       data: JSON.stringify(data),
//       headers: { ...authHeader() },
//     });
//   }
// }

// /**
//  * axios interceptors runs before and after a request, letting the developer modify req,req more
//  * For more details on axios interceptor see https://github.com/axios/axios#interceptors
//  */
// client.interceptors.request.use((config) => {
//   // do something before executing the request
//   // For example tag along the bearer access token to request header or set a cookie
//   const requestConfig = config;
//   const { headers } = config;
//   requestConfig.headers = {
//     ...headers,
//     Authorization: `Bearer ${getItem("access_token")}`,
//   };
//   return requestConfig;
// });

// client.interceptors.response.use(
//   (response) => {
// if (response.data?/.isOk === true) {
//       return response.data;
//     }
//     // if (response.data?.Error !== null) {
//     //   if (response.data?.Error?.code !== 0) {
//     //     toast({
//     //       title: `Có lỗi xảy ra trong quá trình kết nối với máy chủ (${response.data?.Error?.message})`,
//     //       status: 'error',
//     //       duration: 5000,
//     //       position: 'bottom-right',
//     //       isClosable: true
//     //     })
//     //     return response.data
//     //   }
//     // }

//     if (response.data?.Status !== null) {
//       if (response.data?.Status === 401) {
//         toast({
//           title: `Không có quyền truy cập trang (${response.data?.Error?.message})`,
//           status: "error",
//           duration: 5000,
//           position: "bottom-right",
//           isClosable: true,
//         });
//         return response.data;
//       }
//     }

//     return response.data;
//   },
//   (error) => {
//     /**
//      * Do something in case the response returns an error code [3**, 4**, 5**] etc
//      * For example, on token expiration retrieve a new access token, retry a failed request etc
//      */
//     const { response } = error;
//     const originalRequest = error.config;
//     if (response) {
//       if (response.status === 500) {
//         // do something here
//       }
//       if (response.status === 401 || response.data.message === "401 Unroled") {
//         Promise.reject(response?.data);
//         return store.dispatch(logOut());
//       }

//       if (response.status === 404 || response.status === 403) {
//         toast({
//           title: "Có lỗi xảy ra trong quá trình kết nối máy chủ (404 | 403)",
//           status: "error",
//           duration: 2000,
//           position: "bottom-right",
//           isClosable: true,
//         });
//         return Promise.reject(response.data);
//       }

//       return originalRequest;
//     }
//     toast({
//       title: "Máy chủ không phản hồi. Vui lòng thử lại",
//       status: "error",
//       duration: 2000,
//       position: "bottom-right",
//       isClosable: true,
//     });
//     store.dispatch(logOut());
//     window.location.assign("/error");
//     return Promise.reject(error);
//   }
// );
// export { DataService };
