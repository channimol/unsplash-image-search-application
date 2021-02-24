import axios from 'axios'
const {
  VUE_APP_API_URL,
  VUE_APP_ACCESS_KEY
} = process.env

const instance = axios.create({
  baseURL: VUE_APP_API_URL,
  timeout: 1000,
  headers: {
    'Content-Type': 'Application/json',
    'Authorization': 'Client-ID ' + VUE_APP_ACCESS_KEY
  }
})

export default instance