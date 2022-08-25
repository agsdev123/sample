import axios from "axios";
import baseUrl from "./BaseUrl";


const Axiosinstance = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});


Axiosinstance.interceptors.request.use(
  (config) => {
    // console.log("config", config.headers);
    // const val = localStorage.getItem("persist:root");
    // const { token } = val ? JSON.parse(JSON.parse(val).auth)?.profileinfo : null ?? {};
    // config.headers["x-token"] = token?token: gettoken();
    // config.headers["access-control-allow-origin"] = "*";
    return config;
  },
  (error) => {
    // Promise.reject(error)
  },
);

Axiosinstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.message === "Network Error" && !error.response) {
      console.log("network error");
    }
    const { status, data, config } = error.response??{};
    console.log("Network>>>kkkkstatus", status);

    if (status === 401) {
      return "";
    }
    if (status === 400 && config.method === "get" && data.errors.hasOwnProperty("id"))
      if (status === 500) {
        console.log("Network>>>kkkkstatus", status);
      }
    return error.response;
  },
);

export default Axiosinstance;
