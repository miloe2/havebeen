<template>
    <div class="w-full h-auto mt-20">
        <div class="text-xl font-bold montserrat">국가별 전시회</div>
        <ul 
        class="flex w-full h-full flex-wrap mt-8">
            <li v-for="(item, index) in country" :key="index" 
            @click="handleBtn(item)"
            :class="selectedCountry === item ? 'bg-stone-950 text-white' : 'bg-zinc-100 text-def'"
            class=" mr-3 mb-3 px-3 py-1.5 whitespace-pre text-sm rounded-full cursor-pointer">{{ item }}</li>
        </ul>
    </div>
</template>
<script setup lang="ts">
import country from '~/assets/data/country.json';
const emits = defineEmits(['setCountry']) 
const selectedCountry = ref('미국');
const handleBtn = (country : string) => {
    selectedCountry.value = country;
    emits('setCountry', selectedCountry.value);
}


</script>