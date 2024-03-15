<template>
    <div class="w-screen h-screen overflow-hidden fixed left-0 top-0 bg-black text-white"
         :style="{ opacity: props.opacity }">
    </div>
  </template>
<script setup>
const props = defineProps({
    opacity : {type : Number, required : true}
})

onMounted(() => {
    document.body.style.overflow = 'hidden';
})
onBeforeUnmount(()=> {
    document.body.style.overflow = 'auto';

})

</script>\\


