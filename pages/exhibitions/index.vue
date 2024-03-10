<template >
    <div class="xl:w-[1150px] w-full min-h-screen  mx-auto mb-40">
        <ExhibitionsList/>
    </div>
</template>
<script setup lang="ts">
import ExhibitionsList from '~/components/exhibitions/ExhibitionsList.vue';

// const { data: exhibitions, refresh } = await useAsyncData(
//   () => $fetch(`/api/exhibitions/upcoming`)
// );
</script>
<style >
    
</style>