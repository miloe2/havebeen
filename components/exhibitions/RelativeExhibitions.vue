<template >
    <div class="flex flex-col w-full bg-yellow- mt-10">
        <h1 class="font-bold text-lg">{{ props.category }} 전시회를 찾으세요?</h1>
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