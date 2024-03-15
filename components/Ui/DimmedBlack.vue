<template>
    <div class="w-screen h-screen overflow-hidden fixed left-0 top-0 bg-black text-white z-[800]"
         :style="{ opacity: props.opacity }">
    </div>
  </template>
<script setup>
const props = defineProps({
    opacity : {type : Number, required : true}
})

onMounted(() => {
    document.body.style.overflowX = 'hidden';
    document.body.style.overflowY = 'scroll';
})
onBeforeUnmount(()=> {
    document.body.style.overflow = 'auto';

})

</script>

