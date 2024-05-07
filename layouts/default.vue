<template>
    <div class="flex ">
        
        <div class="bg-white w-full h-14 fixed top-0 left-0 border border-solid border-zinc-400 flex  text-sm" style="z-index: 800;">
            <div class="xl:w-[1024px] w-full  bg-red-0   mx-auto flex items-center space-x-4">
            <div class="w-12 h-10 bg-zinc-200 flex justify-center items-center mr-auto">LOGO</div>
            <NuxtLink to="/">
                <div class="px-2 bg-yellow-00">Home</div>
            </NuxtLink>
            <NuxtLink to="/exhibitions">
                <div class="px-2 mx-auto bg-yellow-00 ">Exhibitions</div>
            </NuxtLink>
            <!-- <NuxtLink to="/">
                <div class="w-32 bg-yellow-500">Home</div>
            </NuxtLink>
            <NuxtLink to="/exhibitions">
                <div class="w-32 mx-auto bg-yellow-400 ">Exhibitions</div>
            </NuxtLink>

            <div v-if="data?.expires">
                <NuxtLink to="/member">
                    <div class="w-28 h-10 flex items-center justify-center ring-1 text-center ring-zinc-400 mx-auto absolute bottom-32 left-9 hover:ring-zinc-800 ">
                        My page
                    </div>
                </NuxtLink>
                    <div class="w-28 h-10 flex items-center justify-center ring-1 text-center ring-zinc-400 mx-auto absolute bottom-[5rem] left-9 cursor-pointer hover:ring-zinc-800 ">
                        Logout
                    </div>
            </div>
            <div v-else>
                <NuxtLink to="/login">
                    <div class="w-28 h-10 flex items-center justify-center ring-1 text-center ring-zinc-400 mx-auto absolute bottom-32 left-9 hover:ring-zinc-800 ">
                        Login
                    </div>
                </NuxtLink>

            </div> -->
        </div>
        </div>
        <div class="flex-col flex  w-full ">
            <div class="w-full h-20"></div> 
            <div class="pt-10 mx-auto w-full">
                <slot />

            </div>
        </div>

    </div>

</template>
<script setup lang="ts">
const { data } = useAuth();
</script>
<style scoped>

</style>