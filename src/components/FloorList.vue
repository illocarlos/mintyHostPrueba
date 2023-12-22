<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useStoreNeighborhood } from '@/stores/neighborhood';

const storeNeighborhood = useStoreNeighborhood();
const currentIndexes = ref([]);

const startInterval = () => {
    storeNeighborhood.neighborhoods.forEach((floor, index) => {
        currentIndexes.value[index] = 0; // Inicializamos cada currentIndex a 0 para cada piso
        setInterval(() => {
            if (Array.isArray(floor.pic) && floor.pic.length > 0) {
                currentIndexes.value[index] = (currentIndexes.value[index] + 1) % floor.pic.length;
            }
        }, 3000);
    });
};

const stopInterval = () => {
    // Detener los intervalos (si es necesario)
    // clearInterval...
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
        <div class="p-5 relative border shadow-lg " v-for="(floor, index) in storeNeighborhood.neighborhoods" :key="floor.id">
            <!-- Carrusel de imágenes -->
            <div class="carousel relative w-full">
                <div v-for="(image, imgIndex) in floor.pic" :key="imgIndex" :class="{
                    'block': imgIndex === currentIndexes[index],
                    'hidden': imgIndex !== currentIndexes[index],
                    'opacity-0': imgIndex !== currentIndexes[index],
                    'opacity-100': imgIndex === currentIndexes[index],
                    'z-10': imgIndex === currentIndexes[index],
                    'z-0': imgIndex !== currentIndexes[index],
                }" class="w-full absolute top-0 left-0 transition-opacity duration-500">
                    <img :src="image" :alt="'Floor Image ' + imgIndex" class="w-full" />
                </div>
            </div>
            <!-- Detalles del piso -->
            <div class="p-5">
                <p class="text-green-600 font-extrabold text-center">{{ floor.address }}</p>
                <article class="truncate font-extrabold text-center">{{ floor.apartment_title }}</article>
                <p class="text-center">Ciudad: {{ floor.town }}</p>
                <p class="font-extrabold text-center">{{ floor.monthly_price }}€/M</p>
                <p class="text-center">{{ floor.accommodates_max }} personas</p>
                <p class="text-center">{{ floor.bedrooms }} habitaciones</p>
            </div>
        </div>
    </div>
</template>

<style>
.carousel {
    height: 300px;
    overflow: hidden;
}

.carousel img {
    transition: opacity 0.5s ease-in-out;
    position: absolute;
    top: 0;
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
