<template >
    <div class="w-full h-auto relative flex  flex-col justify-center card bg-zinc-50">
        <div class="w-full h-72 flex justify-center overflow-hidden">
            <img :src="`https://source.unsplash.com/random/300×300`" alt="" class="card-image w-full h-full object-cover" loading="lazy">
        </div>
        
        <div class="w-full h-44 flex justify-center p-4">
            <div class="w-full text-base space-y-[2px] text-def">
                <p class="flex space-x-1"> <img src="/assets/img/icon/location.svg" alt=""> <span class=""> {{ DataItem.country }} / {{ DataItem.city }}</span></p>
                <p class="font-medium">{{ DataItem.englishName }}</p>
                <p class=" truncate">{{ DataItem.eventName }} {{ `(${DataItem.shortName})` }}</p>
                <p>{{ eventPeried(DataItem.startDate, DataItem.finishDate) }}</p>
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
const DataItem = {
    id: 'number',
    country: '미국',
    city: '라스베가스',
    venue: 'Las Vegas Convention Center',
    frequency: '매년',
    marketType: '생활용품',
    shortName: 'ASD',
    englishName: 'ASD Market Week',
    eventName: '미국 라스베가스 생활소비재 박람회',
    eventType: 'online',
    organizer: 'Emerarld',
    organizerWebsite: 'string',
    category: '생활용품',
    startDate: '2024.03.15', 
    finishDate: '2024.03.18', 
    closestDifference: 'number', 
}
</script>
<style scoped>
.card-image {
    transition: transform 0.5s ease-in-out;
}

.card:hover .card-image {
    transform: rotate(10deg) scale(1.3);
}
</style>