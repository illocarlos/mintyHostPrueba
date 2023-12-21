<script setup>
import { RouterView } from 'vue-router';
import NavBar from "./components/NavBar.vue";
import Filtro from './components/Filtro.vue';
import ApartamentList from './components/ApartamentList.vue';
import { useStoreBarrios } from './stores/barrios';
const storeBarrio = useStoreBarrios()


</script>

<template>
<main class="main">
      <NavBar />

      <Filtro/>
</main>

<ApartamentList
       v-for="vivienda in storeBarrio.barrios"
        :key="vivienda.id"
        :vivienda="vivienda"
       />




      <RouterView />
</template>




<style scoped>

      .main{
      background-image: url('./assets/GV.jpg');
      background-size: cover;
      background-position: center;

      }

    


</style>

