<template >
    <div class="lg:w-[1024px] w-full  mx-auto">
        <ExhibitionsList/>
    </div>
</template>
<script setup lang="ts">
import ExhibitionsList from '~/components/exhibitions/ExhibitionsList';

// const { data: exhibitions, refresh } = await useAsyncData(
//   () => $fetch(`/api/exhibitions/upcoming`)
// );
</script>
<style >
    
</style>