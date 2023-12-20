import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api.dev.myplazze.com/api/v1/practice'
})

export default api