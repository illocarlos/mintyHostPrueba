<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useStoreNeighborhood } from '@/stores/neighborhood';
import { formateEuro } from '../helpers/index'
import { useStoreButtom } from '@/stores/traduction.js'

const storeButtom = useStoreButtom()
const storeNeighborhood = useStoreNeighborhood();
const currentIndexes = ref([]);

const startInterval = () => {
    storeNeighborhood.neighborhoods.forEach((floor, index) => {
        currentIndexes.value[index] = 0; 
        setInterval(() => {
            if (Array.isArray(floor.pic) && floor.pic.length > 0) {
                currentIndexes.value[index] = (currentIndexes.value[index] + 1) % floor.pic.length;
            }
        }, 2000);
    });
};

const stopInterval = () => {
  currentIndexes.value.forEach((_, index) => {
        clearInterval(currentIndexes.value[index]);
  });
    storeNeighborhood.neighborhoods
};

onMounted(() => {
    startInterval();
});

onUnmounted(() => {
    stopInterval();
});
</script>

<template>
    <div >
       
        <div class=" relative border hover:scale-110  transition-all  shadow-xl md:mx-5 md:mt-9 md:rounded-t-xl" v-for="(floor, index) in storeNeighborhood.neighborhoods" :key="floor.id">
            <!-- Carrusel de imágenes -->
            <div class="carousel relative w-full md:rounded-lg">
                <div v-for="(image, imgIndex) in floor.pic" :key="imgIndex" :class="{
                    'block': imgIndex === currentIndexes[index],
                    'hidden': imgIndex !== currentIndexes[index],
                    'opacity-0': imgIndex !== currentIndexes[index],
                    'opacity-100': imgIndex === currentIndexes[index],
                    '-z-10': imgIndex === currentIndexes[index],
                    'z-0': imgIndex !== currentIndexes[index],
                }" class="w-full absolute top-0 left-0 transition-transform duration-800">
                    <img :src="image" :alt="'Floor Image ' + imgIndex" class="w-full" />
                </div>
            </div>
      <!-- detalles piso -->
            <div class="px-7 py-8">
                <p class="text-green-600 font-extrabold text-center">{{ floor.address }}</p>
                <article class=" truncate text-center font-extrabold">{{ floor.apartment_title }}</article>
                <p class="text-center uppercasen font-extrabold text-green-600 "> {{ floor.town }}</p>
                <div>
                         <p class="text-center">{{ storeButtom.buttonLeng ? 'Personas' : 'People' }}</p>
                    <p class="text-center text-green-600  font-extrabold ">{{ floor.accommodates_max }}</p>
                </div>
                <div>
                    <p class="text-center"> {{ storeButtom.buttonLeng ? 'Habitaciones' : 'Bedrooms' }}</p>
                    <p class="text-center text-green-600  font-extrabold">{{ floor.bedrooms }}</p>
                </div>
                   <div>
                        <p class="font-extrabold text-center">{{ formateEuro(floor.monthly_price) }}/
                            {{ storeButtom.buttonLeng ? 'Mes' : 'Month' }}</p>
                        </div>
            </div>
        </div>
    </div>
</template>

<style>
.carousel {
    height: 18rem;
    overflow: hidden;
}

.carousel img {
    transition: opacity 0.5s ease-in-out;
    position: absolute;
    top:0;
    left: 0;
    width: 100%;
}

.opacity-0 {
    opacity: 0;
    z-index: 0;
}

.opacity-100 {
    opacity: 1;
    z-index: 10;
}
</style>
