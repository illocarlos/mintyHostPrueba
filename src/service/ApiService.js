import api from "@/lib/axios"

const getBarrios = () => api.get('/barrios')

const postAllPisos = () => api.post('/search')


export default {
    getBarrios,
    postAllPisos

}