import { defineStore } from 'pinia'
import { ref, reactive, onMounted } from 'vue'
import ApiService from '@/service/ApiService.js'
import { useStoreModal } from '@/stores/modal'

export const useStoreNeighborhood = defineStore('neighborhood', () => {
    const useModal = useStoreModal()
    const spinnerShow = ref(false)
    const spinnerShowModal = ref(false)
    const neighborhoods = ref([]);
    const allNeighborhoods = ref([]);

    const modalFilter = reactive({
        bedrooms: "",
        guests: "",
        min_price: "",
        max_price: "",

    })

    function $reset() {
        modalFilter.bedrooms = "";
        modalFilter.guests = "";
        modalFilter.min_price = "";
        modalFilter.max_price = "";
    }


    async function fetchPisos(params) {



        try {

            const { data } = await ApiService.postAllFloor(params);

            neighborhoods.value = data;
            allNeighborhoods.value = data;
            $reset()
        }
        catch (error) {
        }

    };

    function filterNeighborhoodFloor(floorFilter) {

        if (!floorFilter) {
            return neighborhoods.value = allNeighborhoods.value;
        }
        const filteredNeighborhoods = allNeighborhoods.value.filter(elm => elm.barrio.name === floorFilter);
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
        spinnerShowModal,
        $reset


    }
})
