<template>
    <div class="w-full h-100 relative flex justify-center ">
        <div class="w-full h-[60%] absolute bottom-0 bg-zinc-200 flex justify-center">
            <div class="w-9/12 h-20 mt-32 text-sm">
                <p class="text-zinc-600">{{ props.englishName }}</p>
                <p class="font-semibold">{{ props.eventName }}</p>
                <p>{{ eventPeried(props.startDate, props.finishDate) }}</p>
            </div>
        </div>
        <div class="w-9/12 h-[270px] absolute top-0 flex justify-center overflow-hidden">
            <img :src="`https://source.unsplash.com/random/30${props.i}×300`" alt=""  class="w-full h-full object-cover hover:rotate-[10deg] hover:scale-[1.3] transition-all duration-500" loading="lazy">
        </div>
    </div>
</template>
<script setup>
import { eventPeried } from '~/utils/formatUnit';
const props = defineProps({
    eventName : {type : String, required : true},
    englishName : {type : String, required : true},
    country : {type : String, required : true},
    city : {type : String, required : true},
    startDate : {type : String, required : true},
    finishDate : {type : String, required : true},
    i : {type : Number , required : true},
})
</script>