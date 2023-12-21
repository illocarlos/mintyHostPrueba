<script setup>
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { useStoreModal } from '@/stores/modal'
import { useStoreNeighborhood } from '../stores/neighborhood.js'

const storeNeighborhood = useStoreNeighborhood();
const modal = useStoreModal()



const handleSubmit = () => {
   storeNeighborhood.fetchPisos(storeNeighborhood.modalFilter)
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
                            class="relative transform overflow-hidden rounded-lg  bg-emerald-500  px-30 pt-5 pb-4 text-left shadow-xl  px-8 mb-20 
                            transition-all sm:my-8 sm:w-full sm:max-w-2xl sm:p-6">
                            <div>
                                <div class="mt-3">
                                    <DialogTitle as="h2" class="uppercase text-center font-extrabold text-4xl text-black">
                                   buscador
                                    </DialogTitle>
                                    <form
                                    @submit.prevent="handleSubmit"
                                    >




                                        <div class="mt-3 flex flex-col justify-center items-center">
                                            <label for="bedrooms" class="block text-center text-white">Habitaciones</label>
                                            <input type="number" id="bedrooms" v-model="storeNeighborhood.modalFilter.bedrooms "
                                                pattern="[0-9]*"  class="w-1/2 text-center p-2 mt-1 rounded-lg" />
                                        </div>
                                      <div class="mt-3 flex flex-col justify-center items-center">
        <label for="guests" class="block text-center text-white">Numero ocupante</label>
        <input pattern="[0-9]*" type="number" id="guests" v-model="storeNeighborhood.modalFilter.guests"
            class="w-1/2 text-center p-2 mt-1 rounded-lg" />

    </div>
                                         <div class="mt-3 flex flex-col justify-center items-center">
                                                <label for="min_price" class="block text-center text-white">Precio minimo</label>
                                                <input pattern="[0-9]*" type="number" id="min_price" v-model="storeNeighborhood.modalFilter.min_price"
                                                    class="w-1/2 p-2 text-center mt-1 rounded-lg" />
                                            </div>
                                             <div class="mt-3 flex flex-col justify-center items-center">
                                                <label for="max_price" class="block text-center text-white">Precio maximo</label>
                                                <input  pattern="[0-9]*" type="number" id="max_price" v-model="storeNeighborhood.modalFilter.max_price"
                                                    class="w-1/2 p-2 mt-1 text-center rounded-lg" />
                                            </div>
<!-- <div class=" flex flex-row justify-between lg:justify-center ">
      <div class="mt-3  flex flex-col justify-center items-center">
                <label for="heating" class="block text-center text-white">Wifi</label>
                <input type="checkbox" id="heating" v-model="storeNeighborhood.modalFilter.heating" class="customCheck" />
            </div>
            <div class="mt-3 ml-5 flex flex-col justify-center items-center">
                    <label for="wifi" class="block text-center text-white">Comedor</label>
                    <input type="checkbox" id="wifi" v-model="storeNeighborhood.modalFilter.wifi" class="customCheck" />
                </div>
                <div class="mt-3 ml-5   flex flex-col justify-center items-center">
                    <label for="AC" class=" block text-center text-white">Aseo</label>
                    <input type="checkbox" id="AC" v-model="storeNeighborhood.modalFilter.AC" class="customCheck" />
                </div>
                </div> -->

                                        <div class="mt-5 flex justify-center gap-4">
                                             <button @click="modal.clickShowModal()"
                                                class="bg-red-700 text-white px-6 py-2 font-extrabold uppercase rounded-lg
                                                 hover:bg-red-400 hover:text-black hover:px-8 
                                                 transition-all ease-linear active:animate-ping focus:outline-none">
                                                Cerrar
                                            </button>
                                            <button 
                                             @click="modal.clickShowModal()"
                                            type="submit"
                                                class="  bg-white text-black px-6 py-2 font-extrabold uppercase rounded-lg
                                                 hover:bg-emerald-600 hover:text-white hover:px-8  
                                                  transition-all ease-linear active:animate-ping focus:outline-none">
                                                Enviar
                                            </button>
                                           
                                        </div>



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