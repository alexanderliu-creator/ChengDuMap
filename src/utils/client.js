import axios from "axios"

const API_BASE = "http://192.168.1.221:8081/api"

export const APIClient = axios.create({
  baseURL: API_BASE,
  timeout: 5000,
  withCredentials: true
})
