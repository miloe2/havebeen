<template>
    <div class="text-3xl font-bold montserrat">Schedule</div>
    <div class="montserrat text-2xl font-bold mt-4 flex flex-row">
            <img src="/assets//img/icon/longArrow.svg" alt="" class="cursor-pointer w-10 rotate-180 mr-4" @click="handleLeftBtn">
            <span class="mr-2">{{ year }}.</span>   <span> {{ month }}</span>
            <img src="/assets//img/icon/longArrow.svg" alt="" class="cursor-pointer w-10 ml-4" @click="handleRightBtn">
        </div>

</template>
<script setup>
</script>
<style lang="">
    
</style>