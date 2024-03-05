<template>
    <div class="flex">
        <div class="w-[200px] h-screen fixed top-0 left-0 bg-red-50 flex flex-col items-center py-10 space-y-4">
            <div class="w-32 h-20 bg-zinc-200 mb-10 flex justify-center items-center">LOGO</div>
            <NuxtLink to="/">
                <span>Home</span>
            </NuxtLink>
            <NuxtLink to="/exhibitions">
                <span>Exhibitions</span>
            </NuxtLink>

        </div>
        <div class="flex-col flex ml-[200px] w-full">
            <div class="w-full h-10 bg-red-0"></div> 
            <div class="pt-10 mx-auto">
                <slot />

            </div>
        </div>

    </div>

</template>
<script setup lang="ts">

</script>
<style scoped>

</style>