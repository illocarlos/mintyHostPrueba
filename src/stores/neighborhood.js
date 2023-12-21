import { defineStore } from 'pinia'
import { ref, onMounted } from 'vue'
import ApiService from '@/service/ApiService.js'
export const useStoreNeighborhood = defineStore('neighborhood', () => {
    const spinnerShow = ref(false)
    const neighborhoods = ref([]);
    const allNeighborhoods = ref([]);

    const fetchPisos = async () => {


        try {
            const { data } = await ApiService.postAllFloor();
            neighborhoods.value = data;
            allNeighborhoods.value = data;
        } catch (error) {
        }

    };

    const filterNeighborhoodFloor = (floorFilter) => {



        if (!floorFilter) {
            neighborhoods.value = allNeighborhoods.value;
            return;
        }
        const filteredNeighborhoods = allNeighborhoods.value.filter(elm => elm.barrio.name === floorFilter);
        neighborhoods.value = filteredNeighborhoods;

    }

    onMounted(async () => {
        await fetchPisos();
    });

    return {
        neighborhoods,
        fetchPisos,
        filterNeighborhoodFloor,
        spinnerShow
    }
})
