<script setup>
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { useStoreModal } from '@/stores/modal'
import { useDrinkStore } from '@/stores/drink'
import { useStoreFavorite } from '@/stores/favorite'

const modal = useStoreModal()
const store = useDrinkStore()
const favorite = useStoreFavorite()

const formData = {
    name: '',
    email: ''
};

const handleSubmit = () => {
    // Lógica para enviar el formulario
    console.log('Datos del formulario:', formData);
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
                            class="relative transform overflow-hidden rounded-lg bg-slate-800  px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl sm:p-6">
                            <div>
                                <div class="mt-3">
                                    <DialogTitle as="h2" class="text-center font-extrabold text-4xl text-purple-400">
                                        {{ store.drinkId.strDrink }}
                                    </DialogTitle>
                                    <!-- Contenido del modal -->
                                    <!-- ... -->

                                    <!-- Formulario -->
                                    <form @submit.prevent="handleSubmit">
                                        <div class="mt-5">
                                            <label for="name" class="block text-white">Nombre:</label>
                                            <input type="text" id="name" v-model="formData.name"
                                                class="w-full p-2 mt-1 rounded-lg" />
                                        </div>
                                        <div class="mt-3">
                                            <label for="email" class="block text-white">Email:</label>
                                            <input type="email" id="email" v-model="formData.email"
                                                class="w-full p-2 mt-1 rounded-lg" />
                                        </div>
                                        <div class="mt-5 flex justify-center gap-4">
                                            <button type="submit"
                                                class="bg-orange-300 text-purple-700 px-6 py-2 font-extrabold uppercase rounded-lg hover:bg-purple-700 hover:text-orange-500 ease-linear active:animate-ping focus:outline-none">
                                                Enviar
                                            </button>
                                            <button @click="modal.clickShowModal()"
                                                class="bg-gray-400 text-black px-6 py-2 font-extrabold uppercase rounded-lg hover:bg-black hover:text-white ease-linear active:animate-ping focus:outline-none">
                                                Cerrar
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
</TransitionRoot></template>
