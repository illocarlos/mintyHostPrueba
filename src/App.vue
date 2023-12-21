<script setup>
import { RouterView } from 'vue-router';
import NavBar from "./components/NavBar.vue";
import Filter from './components/Filter.vue';
import FloorList from './components/FloorList.vue';
import Modal from './components/Modal.vue';
import { useStoreNeighborhood } from './stores/neighborhood';
const storeNeighborhood = useStoreNeighborhood()


</script>

<template>
<main class="main">
      <NavBar />
      <Filter/>
</main>
        <Modal/>
<FloorList
       v-for="floor in storeNeighborhood.neighborhoods"
        :key="floor.id"
        :floor="floor"
       />
      <RouterView/>

</template>

<style scoped>

      .main{
      background-image: url('./assets/GV.jpg');
      background-size: cover;
      background-position: center;
      z-index: -20;
      z-index: -10;

      }

    


</style>

