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





    const fetchPisos = async () => {


        try {
            const { data } = await ApiService.postAllFloor();

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











    function handleSubmit(filter) {

        const filteredNeighborhoodsModal = filterneighborhoods.value.filter
            (elm => elm.bathrooms >= filter.bedrooms && elm.accommodates_max >= filter.guests && elm.monthly_price >= filter.max_price);




        neighborhoods.value = filteredNeighborhoodsModal;
        console.log('------->', neighborhoods.value)

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
        handleSubmit
    }
})
