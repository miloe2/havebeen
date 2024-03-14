<template>
    <div class="slider-container relative overflow-hidden">
        <div class="slide-track flex transition-transform duration-500" :style="slideStyle">
            <ul class="slide w-full  grid grid-cols-3 flex-shrink-0 gap-x-4" v-for="slides in groupedSlides" :key="slides.id">
                <li v-for="(item, index) in slides" :key="index"
                @click="goToDetail(item)"
                class=" bg-zinc-100 rounded-2xl  gap-x-4 w-full h-40 relative cursor-pointer">
                <div class="absolute top-0 left-0 w-full h-full rounded-2xl">
                    <img :src="`https://source.unsplash.com/random/1${index}0x200`" alt="" class="w-full h-full object-cover rounded-2xl">
                </div>
                <div class="absolute top-0 left-0 bg-black opacity-40 w-full h-full rounded-2xl"></div>
                <div class=" text-sm text-white absolute top-0 left-0 w-full h-full flex justify-center items-center flex-col">
                    <div class="font-medium ">{{ item.shortName }}</div>
                    <div class="">{{ item.eventName }}</div>
                    <div class="">{{ eventPeried(item.startDate, item.finishDate )}}</div>
                </div>
                </li>
            </ul>
        </div>
        <button @click="handleLeft"><-</button>
        <button @click="handleRight">-></button>
    </div>
</template>
<script setup>
import { ref, computed } from 'vue';
const router = useRouter();
const props = defineProps({
    itemsList : { type : Array, required : Number},
    slidesPerPage : {type : Number}
});
const groupedSlides = computed(() => {
    const groups  = [];
    for(let i = 0; i < props.itemsList.length; i += props.slidesPerPage) {
        groups.push(props.itemsList.slice(i , i + props.slidesPerPage));
    }
    return groups
});

const currentIndex = ref(0);
const handleRight = () => {
    if(currentIndex.value === groupedSlides.value.length - 1){
        return ;
    } else {
        currentIndex.value++;
        console.log(currentIndex.value)
    }
}
const handleLeft = () => {
    if(currentIndex.value === 0){
        return ;
    } else {
        currentIndex.value--;
    }
}
const goToDetail = (item) => {
    console.log('click')
    router.push(`/exhibitions/${item.id}`)
}
const slideStyle = computed(() => ({
    transform: `translateX(-${currentIndex.value * 100}%)`
}));
</script>
