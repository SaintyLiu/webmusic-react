import axios from 'axios';

const request = axios.create({
  baseURL: process.evn.REACT_APP_BASEURL
})

export default request;