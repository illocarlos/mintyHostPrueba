<script setup>
import { RouterLink } from 'vue-router';
import { computed, ref } from 'vue';
import Filtro from './Filtro.vue';
const isNavbarHidden = ref(true);
const buttonIdioma = ref(false)

const toggleNavbar = () => {

    isNavbarHidden.value = !isNavbarHidden.value;
    setTimeout(() => {
        isNavbarHidden.value = true
    },10000)

};

const buttonChange = () => {
    buttonIdioma.value = !buttonIdioma.value;
    return buttonIdioma.value;
};

const reactiveFavBotton = computed(() => {
    return buttonIdioma.value ? 'ES' : 'EN';
});

</script>

<template>
   
    <header class="py-4 px-2 lg:mx-4 xl:mx-12">
        <nav class="flex items-center justify-between flex-wrap ">
       
            <div class="block lg:hidden ">
                <div class="flex flex-row">
                <button
                        class="navbar-burger flex items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white"
                        @click="toggleNavbar">
                        <svg class="fill-current h-6 w-6 text-gray-700" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <title>Menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                        </svg>
                    </button>
                </div>
            </div>
            <button
      class="mt-4 px-2 py-2 bg-green-300 rounded-2xl font-extrabold"
      @click="buttonChange">{{ reactiveFavBotton }}</button>
            <div :class="{ 'hidden lg:flex': isNavbarHidden }" class="w-full flex-grow lg:flex items-center lg:w-auto">
                    <div class="text-sm lg:flex-grow mt-2 animated jackinthebox xl:mx-8">


                  <div
                  v-if="isNavbarHidden">
                     <RouterLink :to="{ name: 'MainPage' }"
                            class="block  lg:inline-block text-md font-bold text-orange-500 sm:hover:border-indigo-400 hover:text-orange-500 mx-2 focus:text-blue-500 p-1 hover:bg-gray-300 sm:hover:bg-transparent rounded-lg">
                            <img src="" alt="logo minty">
                        </RouterLink>
                    <RouterLink class=" mr-6 text-green-500 font-extrabold"  :to="{ name: 'contacto' }">Contacto</RouterLink>    
                    <RouterLink class="mr-6 text-green-500 font-extrabold"   :to="{ name: 'vivienda' }">Vivienda</RouterLink>
                    <RouterLink  class= "mr-6 text-green-500 font-extrabold"  :to="{ name: 'preguntas' }">Preguntas</RouterLink>
                    </div>
                    <div
                    v-else>
                           <RouterLink :to="{ name: 'MainPage' }"
                            class="block lg:inline-block text-md font-bold text-orange-500 sm:hover:border-indigo-400 hover:text-orange-500 mx-2 focus:text-blue-500 p-1 hover:bg-gray-300 sm:hover:bg-transparent rounded-lg">
                            <img src="" alt="logo minty">
                        </RouterLink>
                   <RouterLink class="ml-4 mt-3 text-green-500 font-extrabold"    :to="{ name: 'contacto' }">Contacto</RouterLink> 
                      <hr> 
                        <RouterLink  class="ml-4 mt-3 text-green-500 font-extrabold"  :to="{ name: 'vivienda' }">Vivienda</RouterLink> 
                        <hr>     
                        <RouterLink  class="ml-4 mt-3 text-green-500 font-extrabold"   :to="{ name: 'preguntas' }">Preguntas</RouterLink>
                    </div>
                </div>
            </div>
        </nav>
    <Filtro/>
    </header>


    
</template>
