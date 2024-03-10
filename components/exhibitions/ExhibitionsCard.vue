<template >
    <div class="w-full h-auto relative flex  flex-col justify-center card bg-zinc-50">
        <div class="w-full h-72 flex justify-center overflow-hidden">
            <img :src="`https://source.unsplash.com/random/30${props.i}×300`" alt="" class="card-image w-full h-full object-cover" loading="lazy">
        </div>
        
        <div class="w-full h-44 flex justify-center p-4">
            <div class="w-full text-base space-y-[2px] text-def">
                <p class="flex space-x-1"> <img src="/assets/img/icon/location.svg" alt=""> <span class=""> {{ props.country }} / {{ props.city }}</span></p>
                <p class="font-medium">{{ props.englishName }}</p>
                <p class=" truncate">{{ props.eventName }} {{ `(${props.shortName})` }}</p>
                <p>{{ eventPeried(props.startDate, props.finishDate) }}</p>
                <div class=" pt-2 flex justify-start">
                    <img src="/assets//img/icon/like.svg" alt="" class="w-4 mr-2">
                    <span class=" text-sm text-zinc-400  mr-2"> 0 </span>
                    <img src="/assets//img/icon/star.svg" alt="" class="w-4 mr-2">
                    <span class="text-zinc-400 text-sm"> 0 </span>
                </div>
            </div>
        </div>
    </div>

</template>
<script setup>
const props = defineProps({
    eventName : {type : String, required : true},
    englishName : {type : String, required : true},
    shortName : {type : String, required : true},
    country : {type : String, required : true},
    city : {type : String, required : true},
    startDate : {type : String, required : true},
    finishDate : {type : String, required : true},
    venue : {type : String, required : true},
    i : {type : Number , required : true},
})
</script>
<style scoped>
.card-image {
    transition: transform 0.5s ease-in-out;
}

.card:hover .card-image {
    transform: rotate(10deg) scale(1.3);
}
</style>