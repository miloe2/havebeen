<template >
    <div class="lg:w-[1024px] w-full h-120 mx-auto"> 
        
        <LoginModal/>

    </div>
</template>
<script setup lang="ts">
import LoginModal from '~/components/member/LoginModal.vue';
import RegisterModal from '~/components/member/RegisterModal.vue';
const registerModal = ref(false);
const openRegister = () => {
    registerModal.value = true
}

// const { data: exhibitions, refresh } = await useAsyncData(
//   () => $fetch(`/api/exhibitions/upcoming`)
// );
</script>
<style >
    
</style>