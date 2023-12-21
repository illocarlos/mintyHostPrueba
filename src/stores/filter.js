import { defineStore } from 'pinia'
import { ref, reactive, onMounted } from 'vue'
import ApiService from '@/service/ApiService.js'

export const useStoreFilter = defineStore('filter', () => {




    const neighborhood = reactive({
        id: '',
        name: '',

    })
    const neighborhoods = ref([])


    onMounted(async function () {

        const { data } = await ApiService.getneighborhoods()
        neighborhood.value = data
        neighborhoods.value = data
    })


    return {
        neighborhood,
        neighborhoods
    }
})