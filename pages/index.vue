<template >
    <div class="lg:w-[1024px] w-full  mx-auto mb-40">
        <ClosetList/>
        <CountryList/>
        <CategoryList/>
    </div>
</template>
<script setup lang="ts">
// import ClosetList from '~/components/home/ClosetList';
import ClosetList from '~/components/home/ClosetList.vue';
import CountryButton from '~/components/home/CountryButton.vue';
import CountryList from '~/components/home/CountryList.vue';
import CategoryList from '~/components/home/CategoryList.vue';
// definePageMeta({
//     middleware :'auth',
// })

// const { data: exhibitions, refresh } = await useAsyncData(
//   () => $fetch(`/api/exhibitions/upcoming`)
// );
</script>
<style >
    
</style>