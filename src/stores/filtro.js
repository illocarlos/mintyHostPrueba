import { defineStore } from 'pinia'
import { ref, reactive, onMounted } from 'vue'
import ApiService from '@/service/ApiService.js'

export const useStoreFiltros = defineStore('filtro', () => {
    const spinnerShow = ref(false)



    const barrio = reactive({
        id: '',
        name: '',

    })
    const barrios = ref([])


    onMounted(async function () {

        const { data } = await ApiService.getBarrios()
        barrio.value = data
        barrios.value = data
    })


    return {
        barrio,
        barrios
    }
})