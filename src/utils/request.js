import axios from 'axios';

const request = axios.create({
  baseURL: process.env.REACT_APP_BASEURL
})

export default request;