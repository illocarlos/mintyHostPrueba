<script setup>
import { ref, onMounted } from 'vue';
import { RouterLink } from 'vue-router';
import { useStoreButtom } from '@/stores/traduction.js';

const storeButtom = useStoreButtom();
const isNavbarHidden = ref(true);

const toggleNavbar = () => {
    isNavbarHidden.value = !isNavbarHidden.value;
};

const closeMenuOnOutsideClick = (event) => {
    if (!event.target.closest('.menu') && isNavbarHidden.value === false) {
        isNavbarHidden.value = true;
    }
};

onMounted(() => {
    document.addEventListener('click', closeMenuOnOutsideClick);
});
</script>
<template>
    <div class="h-40">
        <header class="h-40 py-4 px-2 lg:mx-4 xl:mx-12">
            <nav class="z-10 flex items-center flex-wrap">
                <div class="block lg:hidden">
                    <button @click="toggleNavbar" class="menu" :class="{ 'menu-active': !isNavbarHidden }">
                        <div class="bar1"></div>
                        <div class="bar2"></div>
                        <div class="bar3"></div>
                    </button>
                    <div class="flex flex-row"></div>
                    <div v-if="!isNavbarHidden" class="absolute right-0 top-5">
                        <router-link :to="{ name: 'contact' }" class="w-40 flex flex-row justify-center mx-5 p-1">
                            <img src="../assets/logo.svg" alt="logo minty">
                        </router-link>
                    </div>
                </div>
                <div v-if="isNavbarHidden" class="absolute right-0 top-5">
                    <router-link :to="{ name: 'contact' }" class="w-40 flex flex-row justify-center mx-5 p-1">
                        <img src="../assets/logo.svg" alt="logo minty">
                    </router-link>
                </div>
                <div :class="{ 'hidden lg:flex': isNavbarHidden }" class="w-full flex-grow lg:flex items-center lg:w-auto">
                    <div class="text-sm lg:flex-grow mt-2 animated jackinthebox xl:mx-8">
                        <div v-if="isNavbarHidden">
                            <button class="mt-4 mr-6 px-2 py-2 bg-green-300 rounded-2xl font-extrabold"
                                @click="storeButtom.buttonChange">{{ storeButtom.reactiveFavBotton }}</button>
                            <router-link class="mr-6 text-xl text-green-500 font-extrabold" :to="{ name: 'contact' }">{{
                                storeButtom.buttonLeng ? 'Contacto' : 'Contact' }}</router-link>
                            <router-link class="mr-6 text-xl text-green-500 font-extrabold" :to="{ name: 'households' }">{{
                                storeButtom.buttonLeng ? 'Viviendas' : 'dwelling' }}</router-link>
                            <router-link class="mr-6 text-xl text-green-500 font-extrabold" :to="{ name: 'ask' }">{{
                                storeButtom.buttonLeng ? 'Preguntas' : 'Question' }}</router-link>
                        </div>
                        <div v-else
                        class="flex flex-col">
                            <router-link class="mt-3 text-lg text-green-500 font-extrabold" :to="{ name: 'contact' }">{{
                                storeButtom.buttonLeng ? 'Contacto' : 'Contact' }}</router-link>
                            <router-link class="mt-3 text-lg text-green-500 font-extrabold" :to="{ name: 'households' }">{{
                                storeButtom.buttonLeng ? 'Viviendas' : 'dwelling' }}</router-link>
                            <router-link class="mt-3 text-lg text-green-500 font-extrabold" :to="{ name: 'ask' }">{{
                                storeButtom.buttonLeng ? 'Preguntas' : 'question' }}</router-link>
                            <button class="mt-4 w-12 h-6 ml-3 bg-green-300 rounded-2xl font-extrabold"
                                @click="storeButtom.buttonChange">{{ storeButtom.reactiveFavBotton }}</button>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
        <div v-if="!isNavbarHidden" @click="closeMenuOnOutsideClick" class="backdrop"></div>
    </div>
</template>

<style scoped>
.backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 9;
    display: none;
}

.menu {
    display: flex;
    flex-flow: column;
    width: 2.5rem;
    height: 2rem;
    background: transparent;
    gap: 0.65rem;
}

.bar1,
.bar2,
.bar3 {
    background: black;
    height: 2px;
    width: 100%;
    border-radius: 5px;
    transition: all 1s;
    transform-origin: center;
}

.menu-active .bar1 {
    transform: translateY(12px) rotate(45deg);
}

.menu-active .bar2 {
    opacity: 0;
}

.menu-active .bar3 {
    transform: translateY(-12px) rotate(-45deg);
}
</style>

