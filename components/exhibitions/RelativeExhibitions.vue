<template >
    <div class="flex flex-col w-[900px] bg-yellow- mt-4">
        <h1 class="font-bold text-lg">{{ props.category }} 전시회를 찾으세요?</h1>
        <!-- <div v-for="(item, index) in categoryList" :key="index"
        class=" bg-red-50 grid grid-cols-3 w-full h-100">
           <div class="ring-1"> {{ item.eventName }}</div>
        </div> -->
        <!-- {{ props.list[props.category]}} -->
        <!-- <ul  class=" bg-red-50 grid grid-cols-3 w-full gap-4">
            <li v-for="(item, index) in categoryList" :key="index" class="bg-blue-50 w-full h-40 ">{{ item.eventName }}</li>
        </ul> -->
        <div class="w-full mt-4">
            <SwiperSlider :itemsList="categoryList" :slidesPerPage="3"/>

        </div>
    </div>
</template>
<script setup>
import SwiperSlider from '~/components/Ui/SwiperSlider.vue'
const props = defineProps({
    category : {type : String, requried : true},
    list : {type:Array , requried : true}
})
const categoryList = computed(() => props.list.find(e => e.category === props.category)?.data)

</script>
<style>
    
</style>