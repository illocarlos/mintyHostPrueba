<script setup>

defineProps({
    vivienda: {
        type: Object
    }
})
</script>

<template>
      <div class="border shadow-lg">
        
            <div class="p-5">
               
                <p class=" text-green-600 font-extrabold  text-center">{{ vivienda.address }}</p>
                <article class="truncate font-extrabold  text-center">{{ vivienda.apartment_title}}</article>
                <p class="text-center">Ciudad:{{ vivienda.town }}</p>
                <p class=" font-extrabold  text-center"> {{ vivienda.monthly_price}}€/M</p>
                <p class="text-center"> {{ vivienda.accommodates_max}} personas</p>
         
            </div>
        </div>
</template>