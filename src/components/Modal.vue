<script setup>
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { useStoreModal } from '@/stores/modal'
import { useStoreNeighborhood } from '../stores/neighborhood.js'
import { useStoreButtom } from '@/stores/traduction.js'
import Spinner from './Spinner.vue';

const storeButtom = useStoreButtom()
const storeNeighborhood = useStoreNeighborhood();
const modal = useStoreModal()

const handleSubmit = () => {
    storeNeighborhood.spinnerShowModal = true; 
    setTimeout(async () => {
        await storeNeighborhood.fetchPisos(storeNeighborhood.modalFilter);
        storeNeighborhood.spinnerShowModal = false; 
        modal.clickShowModal(); 
    }, 3000);
};
</script>

<template>
    <TransitionRoot as="template" :show="modal.modal">
        <Dialog as="div" class="relative z-10 " @close="modal.clickShowModal()">
            <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100"
                leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
                <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </TransitionChild>
            <div class="fixed inset-0 z-10 overflow-y-auto">
                <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <TransitionChild as="template" enter="ease-out duration-300"
                        enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200"
                        leave-from="opacity-100 translate-y-0 sm:scale-100"
                        leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                        <DialogPanel
                            class="relative transform overflow-hidden rounded-lg  bg-emerald-500  pt-5 pb-4 text-left shadow-xl  px-4 mb-20 
                            transition-all sm:my-8 sm:w-full sm:max-w-2xl sm:p-6 sm:px-8">
                            <div>
                                <div class="mt-3">
                                    <DialogTitle as="h2" class="uppercase text-center font-extrabold text-4xl text-black">
                                  {{storeButtom.buttonLeng ?'buscador':'filter' }} 
                                    </DialogTitle>

                                    <form @submit.prevent="handleSubmit">


                                      <div class="mt-3 flex flex-col justify-center items-center">
              <label for="bedrooms" class="block text-center text-white">
                {{ storeButtom.buttonLeng ? 'Habitaciones' : 'Bedrooms' }}
               </label>
              <span>{{ storeNeighborhood.modalFilter.bedrooms }}</span> 
            <input type="range" id="bedrooms"
                v-model="storeNeighborhood.modalFilter.bedrooms" min="0" max="10" step="1" 
                class="w-2/2 p-2 text-center mt-1 rounded-lg md:w-1/2 " />
                   </div>  
                   <div class="mt-3 flex flex-col justify-center items-center">
                                   <label for="guests" class="block text-center text-white">
                                    {{ storeButtom.buttonLeng ? ' Numero huespedes' : 'Number of guests' }}</label>

                                    <span>{{ storeNeighborhood.modalFilter.guests }}</span> 
                          <input min="0" max="30" step="1"  type="range" id="guests" v-model="storeNeighborhood.modalFilter.guests"
                                       class="w-2/2 text-center p-2 mt-1 rounded-lg md:w-1/2 " />
                                       </div>
                                         <div class="mt-3 flex flex-col justify-center items-center">

                                                <label for="min_price" class="block text-center text-white">  
                                                    {{ storeButtom.buttonLeng ? 'Precio min' : 'Price min' }}</label>
                                                     <span>{{ storeNeighborhood.modalFilter.min_price }}</span> 
                                                <input min="0" max="3000" step="100"  type="range" 
                                                 id="min_price" v-model="storeNeighborhood.modalFilter.min_price"
                                                    class="w-2/2 p-2 text-center mt-1 rounded-lg md:w-1/2 " />
                                            </div>
                                             <div class="mt-3 flex flex-col justify-center items-center">

                                                <label for="max_price" class="block text-center text-white">
                                                      {{ storeButtom.buttonLeng ? 'Precio max' : 'Precio max' }}
                                                </label>
                                                 <span>{{ storeNeighborhood.modalFilter.max_price }}</span> 
                                                <input  min="0" max="3000" step="100"  type="range" id="max_price"
                                                v-model="storeNeighborhood.modalFilter.max_price"
                                                    class="w-2/2 p-2 mt-1 text-center rounded-lg md:w-1/2 " />
                                            </div>
                                        <div class="mt-5 flex justify-center gap-4">
                                             <button @click="modal.clickShowModal()"
                                                class="bg-red-700 text-white px-3 py-2 font-extrabold uppercase rounded-lg 
                                                     sm:px-8  lg:px-8
                                                 hover:bg-red-400 hover:text-black hover:px-8 
                                                 transition-all ease-linear active:animate-ping focus:outline-none">
                                             {{ storeButtom.buttonLeng ? 'Cerrar' : 'Close' }}
                                            </button>
                                            <button 
                                            type="submit"
                                                class="  bg-white text-black px-3 py-2 font-extrabold uppercase rounded-lg
                                                  sm:px-8 lg:px-8 hover:bg-emerald-600 hover:text-white hover:px-8  
                                                  transition-all ease-linear active:animate-ping focus:outline-none">
                                                    {{ storeButtom.buttonLeng ? 'Enviar' : 'Send' }}
                                            </button>
                                           
                                        </div>
                                         <Spinner class="spiner" v-if="storeNeighborhood.spinnerShowModal" /> 
                                    </form>
                                </div>
                        </div>
                    </DialogPanel>
                </TransitionChild>
            </div>
        </div>
    </Dialog>
</TransitionRoot>
</template>
<style scoped>
.customCheck{
    margin-top:0.25rem;
    width:2rem ;
    height:1.5rem ;
}
</style>