import { defineStore } from 'pinia'
import { ref, reactive, onMounted } from 'vue'
import ApiService from '@/service/ApiService.js'
import { useStoreModal } from './modal.js'
export const useStoreFilter = defineStore('filter', () => {
    const modal = useStoreModal()
    const neighborhoods = ref([])
    const buttonLeng = ref(false)





    const neighborhood = reactive({
        id: '',
        name: '',

    })

    function showModal(params) {
        modal.clickShowModal()
    }

    onMounted(async function () {

        const { data } = await ApiService.getneighborhoods()
        neighborhood.value = data
        neighborhoods.value = data
    })




    return {
        neighborhood,
        neighborhoods,
        neighborhood

    }
})