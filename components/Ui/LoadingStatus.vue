<template>
    <DimmedBlack :opacity="0.0"/>
  </template>
<script setup>
import DimmedBlack from './DimmedBlack.vue';
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

