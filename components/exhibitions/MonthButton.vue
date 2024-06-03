<template>
        <div class="text-3xl font-bold montserrat ">Schedule</div>

    <div class="w-full flex justify-center items-end">
        
        <div class="montserrat text-2xl font-medium flex flex-row">
            <img src="/assets//img/icon/longArrow.svg" alt="" class="cursor-pointer w-10 rotate-180 mr-4" @click="handleLeftBtn">
            <span class="mr-2">{{ year }}.</span>   <span> {{ month }}</span>
            <img src="/assets//img/icon/longArrow.svg" alt="" class="cursor-pointer w-10 ml-4" @click="handleRightBtn">
        </div>
    </div>

</template>
<script setup>
import debounce from 'lodash/debounce';
const year = computed(() => exhibitionStore.searchYear);
const month = computed(() => exhibitionStore.searchMonth);
const exhibitionStore = useExhibitionStore();
const handleRightBtn = debounce(() => {
    exhibitionStore.incrementMonth();
}, 100)
const handleLeftBtn = debounce(() => {
    exhibitionStore.decrementMonth();
}, 100)
</script>
<style >
    
</style>