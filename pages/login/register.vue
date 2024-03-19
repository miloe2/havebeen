<template >
    <div class="lg:w-[1024px] w-full h-120 mx-auto"> 
        
        <RegisterModal />

    </div>
</template>
<script setup lang="ts">
import LoginModal from '~/components/member/LoginModal.vue';
import RegisterModal from '~/components/member/RegisterModal.vue';

// const { data: exhibitions, refresh } = await useAsyncData(
//   () => $fetch(`/api/exhibitions/upcoming`)
// );
</script>
<style >
    
</style>