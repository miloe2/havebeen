<template>
    <div v-for="(item, index) in exhibitions" :key="index">
        {{ item.shortName  }}
    </div>
</template>
<script setup lang="ts">
import { useExhibitionStore } from '~/stores/exhibitionStore';
const exhibitionStore = useExhibitionStore();
const exhibitions = ref()
exhibitions.value = exhibitionStore.exhibitions;
</script>
<style scoped>
    
</style>