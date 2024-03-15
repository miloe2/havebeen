<template>
    <DimmedBlack :opacity="0.4"/>
    <div class="w-screen h-screen  fixed top-0 left-0">
        <div class="w-200 h-160 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-zinc-50 rounded-2xl p-10">
            <button @click="closeBtn" > &times;</button>
            review
        </div>
    </div>
</template>
<script setup>
import DimmedBlack from '~/components/Ui/DimmedBlack.vue';
const emits = defineEmits(['close'])
const closeBtn = () => {
    emits('close')
}

</script>