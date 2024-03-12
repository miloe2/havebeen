<template >
    <div class="flex w-[900px] bg-yellow-100 mt-4">
        <h1>{{ props.category }} 전시회를 찾으세요?</h1>
    </div>
</template>
<script setup>
const props = defineProps({
    category : {type : String, requried : true}
})
</script>
<style>
    
</style>