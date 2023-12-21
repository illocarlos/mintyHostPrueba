<script setup>
import { ref } from 'vue';
import { useStoreFiltros } from '../stores/filtro.js'
import { useStoreBarrios } from '../stores/barrios.js'
const storeFiltro = useStoreFiltros()
const StoreBarrios = useStoreBarrios()

const barrioFilter = ref([])


const handleSubmit = () => {
    barrioFilter.value= storeFiltro.barrio.name

    StoreBarrios.filterBarrioPisos(barrioFilter.value)
}


</script>

<template>
 
        <div class="mx-auto container px-5 py-16">
            <div class="flex justify-between items-center">
                <form class="md:w-2/5 2xl:1/3 bg-emerald-600 my-32 p-10 rounded-lg shadow-2xl space-y-6"
                 >
                    <label class="text-center block text-white uppercase font-extrabold text-2xl"
                        for="category">Barrio</label>
                    <select  @change="handleSubmit" class=" text-2xl text-center p-3 w-full rounded-lg focus:outline-none" name="barrio" id="barrio"  
                    v-model="storeFiltro.barrio.name">
                        <option class="text-center text-slate-300" value="">--selecciona barrio--</option>
                        
                        <option
                     
                          class="text-black"
                         v-for="barrio in storeFiltro.barrios" 
                        :key="barrio.id"
                        :value="barrio.name"
                         >{{ barrio.id }}-{{ barrio.name }}</option>
                    </select>

                    <!-- <Spinner class="spiner" v-if="storeFiltro.spinnerShow" /> -->
                </form>

            </div>
        </div>
    
</template>