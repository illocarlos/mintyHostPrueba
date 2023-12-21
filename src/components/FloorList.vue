<script setup>

defineProps({
    floor: {
        type: Object
    }
})
</script>

<template>
      <div class="border shadow-lg">
        
            <div class="p-5">
               
                <p class=" text-green-600 font-extrabold  text-center">{{ floor.address }}</p>
                <article class="truncate font-extrabold  text-center">{{ floor.apartment_title}}</article>
                <p class="text-center">Ciudad:{{ floor.town }}</p>
                <p class=" font-extrabold  text-center"> {{ floor.monthly_price}}€/M</p>
                <p class="text-center"> {{ floor.accommodates_max}} personas</p>
         
            </div>
        </div>
</template>