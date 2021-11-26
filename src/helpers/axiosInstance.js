import * as Keychain from 'react-native-keychain';
import axios from 'axios';
import {API_ENDPOINT} from '@env';

let headers = {};

const axiosInstance = axios.create({
  baseURL: API_ENDPOINT,
  headers,
});

axiosInstance.interceptors.request.use(
  async config => {
    const {token} = await Keychain.getGenericPassword()
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  error => {
    return Promise.reject(error)
  },
);

export default axiosInstance
