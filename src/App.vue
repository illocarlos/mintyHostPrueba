<script setup>
import { RouterView } from 'vue-router';
import NavBar from "./components/NavBar.vue";
import Filter from './components/Filter.vue';
import FloorList from './components/FloorList.vue';
import Modal from './components/Modal.vue';
import { useStoreNeighborhood } from './stores/neighborhood';
import { useStoreButtom } from './stores/traduction';
const storeButtom = useStoreButtom();
const storeNeighborhood = useStoreNeighborhood()
</script>

<template>
<!-- componentes NavBar y Filter dentro de un header para introducir un fondo en el  -->
      <header 
      class="main">
 <NavBar />
<Filter/>
</header>

 <Modal/>
 <!-- creacion de condicion si no hay viviendas salga un parrafo que explique donde volver para que salgan pisos -->
 <p 
 class="text-center mt-20 text-emerald-600 font-extrabold text-xl"
 v-if="storeNeighborhood.neighborhoods.length === 0">
     {{storeButtom.buttonLeng?'Ninguna vivienda disponible por favor use el filtro de barrio o el boton de filtro'
     :'No housing available please use the neighborhood filter or the filter button'}}</p>
     <!-- plista de pisos -->
        <div v-else class="gap-10 mt-3  ">
       <FloorList class=" grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4  "/>
        </div>
      <RouterView/>
</template>

<style scoped>
.main {
  background-image: url('./assets/GV.jpg');
  background-size: cover;
  background-position: center;
  z-index: -1; 
}
</style>

