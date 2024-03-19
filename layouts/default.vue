<template>
    <div class="flex ">
        <div class="w-[200px] h-screen fixed top-0 left-0 bg-red-0 border-r border-solid border-zinc-400 md:flex hidden flex-col py-10 space-y-4 text-sm">
            <div class="w-32 h-20 bg-zinc-200 mb-10 flex mx-auto justify-center items-center">LOGO</div>
            <NuxtLink to="/">
                <div class="w-32 mx-auto ">Home</div>
            </NuxtLink>
            <NuxtLink to="/exhibitions">
                <div class="w-32 mx-auto ">Exhibitions</div>
            </NuxtLink>
            <NuxtLink to="/login">
                <div class="w-28 h-10 flex items-center justify-center ring-1 text-center ring-zinc-400 mx-auto absolute bottom-32 left-9 hover:ring-zinc-800 ">
                    Login
                </div>
            </NuxtLink>
        </div>
        <div class="flex-col flex md:ml-[200px] ml-0 w-full ">
            <div class="w-full h-10"></div> 
            <div class="pt-10 mx-auto w-full">
                <slot />

            </div>
        </div>

    </div>

</template>
<script setup lang="ts">

</script>
<style scoped>

</style>