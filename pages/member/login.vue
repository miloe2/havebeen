<template >
    <div class="lg:w-[1024px] w-full b0 mx-auto absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2">
        <LoginModal/>
    </div>
</template>
<script setup lang="ts">
import LoginModal from '~/components/member/LoginModal.vue';

// const { data: exhibitions, refresh } = await useAsyncData(
//   () => $fetch(`/api/exhibitions/upcoming`)
// );
</script>
<style >
    
</style>