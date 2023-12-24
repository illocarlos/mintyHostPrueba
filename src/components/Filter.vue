<script setup>
import { ref } from 'vue';
import Spinner from './Spinner.vue';
import { useStoreFilter } from '../stores/filter.js'
import { useStoreNeighborhood } from '../stores/neighborhood.js'
import { useStoreModal } from '../stores/modal'
import { useStoreButtom } from '@/stores/traduction.js'

const storeButtom = useStoreButtom()
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
         class=" font-extrabold text-xl fixed right-0 bg-emerald-400 px-6 py-2 rounded-l-xl 
         hover:px-12 transition-all z-20 lg:px-14 lg:py-3  lg:hover:px-20 ">
                 +
            </button>
        <div class="mt-20 flex flex-col justify-between  md:flex-row">
            <article class=" text-lg md:text-xl lg:text-2xl 2xl:text-3xl" >
                <h1 class="font-extrabold">
            {{ storeButtom.buttonLeng ?
             ' Gestion de pisos y apartamentos turisticos' 
            : 'Management of tourist flats and apartments' }}</h1>
           <p> {{ storeButtom.buttonLeng ?
             'Nos encargamos de gestionar íntegramente tu alquiler turístico' 
            : 'We take care of fully managing your tourist rental' }}</p>
            </article>

            <form class="  bg-emerald-600 my-20 p-4 rounded-lg shadow-2xl
             md:w-5/12 md:my-26   2xl:w-2/5">
                <select @change="handleSubmit" class="text-xl text-center p-3 w-full rounded-lg focus:outline-none"
                name="barrio" id="barrio" v-model="NeighborhoodFilter">
                <option class=" text-center text-slate-800" value="">
                    {{ storeButtom.buttonLeng ? 
                    ' selecciona un barrio' 
                    : 'select a neighborhood' }}</option>

                <option 
                class="text-black" 
                v-for="neighborhood in storeFilter.neighborhoods"
                 :key="neighborhood.id"
                :value="neighborhood.name">
                {{ neighborhood.id }}-{{ neighborhood.name }}</option>
            </select>
            <Spinner class="spiner" v-if="storeNeighborhood.spinnerShow" /> 
        </form>
        </div>
    </div>
</template>
