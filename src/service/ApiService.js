import api from "@/lib/axios"

const getneighborhoods = () => api.get('/barrios')

const postAllFloor = () => api.post('/search')


export default {
    getneighborhoods,
    postAllFloor

}