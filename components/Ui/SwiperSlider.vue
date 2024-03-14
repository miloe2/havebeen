<template>
    <div class="slider-container relative overflow-hidden">
        <div class="slide-track flex transition-transform duration-500" :style="slideStyle">
            <div class="slide w-full ring-1 flex-shrink-0" v-for="slide in slides" :key="slide.id">
                <!-- Slide Content -->

                {{ slide }}
            </div>
        </div>
        <button @click="handleLeft"><-</button>
        <button @click="handleRight">-></button>
    </div>
</template>
<script setup>
import { ref, computed } from 'vue';

const currentIndex = ref(0);
const slides = ref([1,2,3,4,5]); // 슬라이드 데이터
const handleRight = () => {
    if(currentIndex.value === slides.value.length - 1){
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
const slideStyle = computed(() => ({
    transform: `translateX(-${currentIndex.value * 100}%)`
}));
</script>

<style scoped>
/* 슬라이더 컨테이너 스타일 */


</style>