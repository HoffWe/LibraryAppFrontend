import axios, { AxiosRequestConfig } from "axios";

export const authorApi = axios.create();

export const bookApi = axios.create();

export const useAxios = () => {
    authorApi.interceptors.request.use((config: AxiosRequestConfig) => {


    return{
        ...config,
        baseURL: process.env.REACT_APP_AUTHOR_API_URL,
    };
    })

    bookApi.interceptors.request.use((config: AxiosRequestConfig) => {


    return{
        ...config,
        baseURL: process.env.REACT_APP_AUTHOR_API_URL,
    };
    })
}


