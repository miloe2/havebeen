<template >
    <div>
        exhibitons page입니다
        <ExhibitionsList/>
    </div>
</template>
<script setup lang="ts">
import { onMounted } from 'vue';
import { useExhibitionStore } from '~/stores/exhibitionStore';
import ExhibitionsList from '~/components/ExhibitionsList.vue';
const exhibitionStore = useExhibitionStore();
const currentPage = ref(1);

// const limit = ref(8);
onMounted(async() => {
    await exhibitionStore.fetchExhibitions(currentPage.value);
});

// const { data: exhibitions, refresh } = await useAsyncData(
//   () => $fetch(`/api/exhibitions?page=${currentPage.value}&limit=${limit.value}`)
// );
</script>
<style >
    
</style>