<script setup>
import { RouterLink } from 'vue-router';
import { computed, ref } from 'vue';
const isNavbarHidden = ref(true);
const buttonLeng = ref(false)

const toggleNavbar = () => {

    isNavbarHidden.value = !isNavbarHidden.value;
    setTimeout(() => {
        isNavbarHidden.value = true
    },10000)

};

const buttonChange = () => {
    buttonLeng.value = !buttonLeng.value;
    return buttonLeng.value;
};

const reactiveFavBotton = computed(() => {
    return buttonLeng.value ? 'ES' : 'EN';
});
</script>
<template>
    <header class=" py-4 px-2 lg:mx-4 xl:mx-12">
        <nav class=" z-10 flex items-center  flex-wrap ">
            
            
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
                <div
                 v-if="!isNavbarHidden" 
                class="absolute right-0 top-5 ">
                <RouterLink 
                :to="{ name: 'contact' }"
             class=" w-40 flex flex-row justify-center  mx-5  p-1 ">
                                                    <img src="../assets/logo.svg" alt="logo minty">
                                                </RouterLink>
            </div>
        </div>
           <div
            v-if="isNavbarHidden" 
           class="absolute right-0 top-5 ">
                    <RouterLink 
                    :to="{ name: 'contact' }"
                 class=" w-40 flex flex-row justify-center  mx-5  p-1 ">
                                                        <img src="../assets/logo.svg" alt="logo minty">
                                                    </RouterLink>
                </div>
            <div :class="{ 'hidden lg:flex': isNavbarHidden }" class="w-full flex-grow lg:flex items-center lg:w-auto">
                    <div class="text-sm lg:flex-grow mt-2 animated jackinthebox xl:mx-8">
                        <div
                        v-if="isNavbarHidden" >
                        <button
                      class="mt-4 mr-6 px-2 py-2 bg-green-300 rounded-2xl font-extrabold "
                      @click="buttonChange">{{ reactiveFavBotton }}</button>
                    <RouterLink class=" mr-6 text-green-500 font-extrabold"  :to="{ name: 'contact' }">{{ buttonLeng ?'Contacto':'Contact' }}</RouterLink>    
                    <RouterLink class="mr-6 text-green-500 font-extrabold"   :to="{ name: 'households' }">{{ buttonLeng ? 'Viviendas' : 'dwelling' }}</RouterLink>
                    <RouterLink  class= "mr-6 text-green-500 font-extrabold"  :to="{ name: 'ask' }">{{ buttonLeng ? 'Preguntas' : 'Question' }}</RouterLink>
                    </div>
                    <div
                    class="flex flex-col"
                    v-else>
                   <RouterLink class=" mt-3 text-green-500 font-extrabold"    :to="{ name: 'contact' }">{{ buttonLeng ? 'Contacto' : 'Contact' }}</RouterLink> 
                     
                        <RouterLink  class="mt-3 text-green-500 font-extrabold"  :to="{ name: 'households' }">{{ buttonLeng ? 'Viviendas' : 'dwelling' }}</RouterLink> 
                           
                        <RouterLink  class=" mt-3 text-green-500 font-extrabold"   :to="{ name: 'ask' }">{{ buttonLeng ? 'Preguntas' : 'question' }}</RouterLink>
                          <button
                              class="mt-4 w-14 h-6  bg-green-300 rounded-2xl font-extrabold"
                              @click="buttonChange">{{ reactiveFavBotton }}</button>  
                    </div>
                </div>
            </div>
        </nav>
    </header> 
</template>
