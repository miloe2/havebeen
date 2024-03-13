<template >
    <div class="flex flex-col w-[900px] bg-yellow-100 mt-4">
        <h1>{{ props.category }} 전시회를 찾으세요?</h1>
        <!-- <div v-for="(item, index) in props.list" :key="index">
            {{ item }}
        </div> -->
        <!-- {{ props.list[props.category]}} -->
        <div v-for="(item, index) in categoryList" :key="index">
            {{ item }}
        </div>
    </div>
</template>
<script setup>
const props = defineProps({
    category : {type : String, requried : true},
    list : {type:Array , requried : true}
})
const categoryList = computed(() => props.list.find(e => e.category === props.category)?.data)

</script>
<style>
    
</style>