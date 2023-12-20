import api from "@/lib/axios"

const getBarrios = () => api.get('/barrios')



export default {
    getBarrios,

}