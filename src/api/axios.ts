import axios, { AxiosRequestConfig } from "axios";

// define common config for Axios
const instanceAxios = {
  baseURL: process.env.NEXT_PUBLIC_API,
};

const axiosConfig = axios.create(instanceAxios);

const request = ({ method, url, data, ...rest }: AxiosRequestConfig) =>
  axiosConfig({
    method: method,
    url: url,
    data: data,
    ...rest,
  });

export { request };
