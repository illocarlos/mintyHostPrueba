import api from "@/lib/axios"

const getneighborhoods = () => api.get('/barrios')

const postAllFloor = (params) => api.post('/search', params)


export default {
    getneighborhoods,
    postAllFloor

}