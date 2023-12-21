import { defineStore } from 'pinia'
import { ref, reactive, onMounted } from 'vue'
import ApiService from '@/service/ApiService.js'
export const useStoreNeighborhood = defineStore('neighborhood', () => {
    const spinnerShow = ref(false)
    const neighborhoods = ref([]);
    const filterneighborhoods = ref([])
    const allNeighborhoods = ref([]);
    const modalFilter = reactive({
        bedrooms: "",
        guests: "",
        min_price: "",
        max_price: "",

    })

    const fetchPisos = async (params) => {
        try {
            const { data } = await ApiService.postAllFloor(params);

            neighborhoods.value = data;
            allNeighborhoods.value = data;
            filterneighborhoods.value = data;

        } catch (error) {
        }

    };

    function filterNeighborhoodFloor(floorFilter) {
        if (!floorFilter) {
            return neighborhoods.value = allNeighborhoods.value;
        }
        const filteredNeighborhoods = allNeighborhoods.value.filter(elm => elm.barrio.name === floorFilter);
        console.log(filteredNeighborhoods)
        neighborhoods.value = filteredNeighborhoods;

    }


    onMounted(async () => {
        await fetchPisos();
    });

    return {
        modalFilter,
        neighborhoods,
        fetchPisos,
        filterNeighborhoodFloor,
        spinnerShow,
    }
})
