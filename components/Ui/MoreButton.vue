<template >
    <div class="w-full flex justify-center">  
        <span class="px-10 py-2 cursor-pointer rounded-full ring-1 ring-zinc-500 hover:ring-2 hover:font-bold transition-all duration-200 text-sm" @click="emitToAction">{{ props.name }}</span> 
    </div>
</template>
<script setup>
const props = defineProps({
    name : {type : String, requried : true},
})
const emits = defineEmits(['action']);
const emitToAction = () => {
    emits('action')
}
</script>
<style >
    
</style>