import { defineStore } from 'pinia'
import { ref, reactive, onMounted } from 'vue'
import ApiService from '@/service/ApiService.js'

export const useStoreBarrios = defineStore('barrios', () => {
    const spinnerShow = ref(false)
    const barrio = reactive({
        id: '',
        name: '',

    })
    const barrios = ref([])

    onMounted(async function () {

        const { data } = await ApiService.getBarrios()
        barrios.value = data
        console.log(barrios.value)

    })

    return {
        barrio,
        barrios
    }
})