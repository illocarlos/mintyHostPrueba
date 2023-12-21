import { defineStore } from 'pinia'
import { ref, reactive, onMounted } from 'vue'
import ApiService from '@/service/ApiService.js'

export const useStoreBarrios = defineStore('barrios', () => {

    const barrios = ref([]);
    const allBarrios = ref([])


    const fetchPisos = async () => {
        try {
            const { data } = await ApiService.postAllPisos();
            barrios.value = data
            allBarrios.value = data;
        } catch (error) {
        }
    };





    const filterBarrioPisos = (barrioFilter) => {
        if (!barrioFilter) {
            return barrios.value = allBarrios.value
        }
        const filteredBarrios = allBarrios.value.filter(elm => elm.barrio.name === barrioFilter);
        barrios.value = filteredBarrios;
    }



    onMounted(async () => {
        await fetchPisos();
    });



    return {
        barrios,
        fetchPisos,
        filterBarrioPisos
    }
})