<script setup>
import { ref } from 'vue';
import Spinner from './Spinner.vue';
import { useStoreFilter } from '../stores/filter.js'
import { useStoreNeighborhood } from '../stores/neighborhood.js'
import { useStoreModal }from'../stores/modal'
const useModal= useStoreModal()
const storeFilter = useStoreFilter();
const storeNeighborhood = useStoreNeighborhood();

const NeighborhoodFilter = ref("");

const handleSubmit = async () => {
    storeNeighborhood.spinnerShow = true;

    try {
        await new Promise((resolve) => {
            setTimeout(() => {
                resolve(storeNeighborhood.filterNeighborhoodFloor(NeighborhoodFilter.value));
            }, 2000);
        });
    } catch (error) {
    console.log(error)
    } finally {
        storeNeighborhood.spinnerShow = false;
    }
}
</script>
<template>
    <div class="mx-auto container px-5 py-16">
         <button
         @click="useModal.clickShowModal"
         class=" font-extrabold text-2xl fixed right-0 bg-emerald-400 px-6 py-2 rounded-l-xl hover:px-12 transition-all ">
                       +
            </button>
        <div class="flex justify-between items-center">
            <form class="md:w-2/5 2xl:1/3 bg-emerald-600 my-32 p-10 rounded-lg shadow-2xl space-y-6">
                <label class="text-center block text-white uppercase font-extrabold text-2xl" for="category">barrio</label>
                <select @change="handleSubmit" class="text-2xl text-center p-3 w-full rounded-lg focus:outline-none"
                name="barrio" id="barrio" v-model="NeighborhoodFilter">
                <option class="text-center text-slate-500" value="">selecciona un barrio</option>
                <option class="text-black" v-for="neighborhood in storeFilter.neighborhoods" :key="neighborhood.id"
                :value="neighborhood.name">{{ neighborhood.id }}-{{ neighborhood.name }}</option>
            </select>
           
            <Spinner class="spiner" v-if="storeNeighborhood.spinnerShow" /> 
        </form>
        </div>
    </div>
</template>
