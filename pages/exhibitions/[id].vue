<template>
    <div class="w-screen h-screen bg-red-500">
        {{ exhibitionDetail }}
    </div>
</template>
<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
// let exhibitionId = parseInt(route.params.id, 10);
const exhibitionId = Array.isArray(route.params.id) ? route.params.id[0] : route.params.id;
// const exhibitionId = parseInt(route.params.id as string, 10);

// let exhibitionId = route.params.id as string;
// const exhibitionId = route.params.id as string;
const { data: exhibitionDetail, pending, error, refresh } = useAsyncData(async () => {
    const exhibitionStore = useExhibitionStore();
    await exhibitionStore.fetchExhibitionDetail(exhibitionId);
    return exhibitionStore.exhibitionDetail;
});
// `exhibitionId`를 사용하여 데이터를 가져오는 로직
</script>

<style>
    
</style>