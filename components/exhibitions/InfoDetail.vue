<template >
    <div class="flex w-[900px] bg-yellow-">
        <div class="w-full h-[360px]">
            <img :src="`https://source.unsplash.com/random/400x300`" alt="" class="card-image w-full h-full object-cover" loading="lazy">
        </div>
        <div class="flex flex-col pl-10 w-full pt-8 ">
            <div class="text-sm font-medium">
                <span class=" py-1 border-t-2 border-b-2 border-solid border-red-500 mr-3">{{ props.exhibitionsDetail.category}}</span>
                <span class=" py-1 border-t-2 border-b-2 border-solid border-green-500 mr-1">{{ props.exhibitionsDetail.country}}</span>
            </div>
            <h2 class="text-sub montserrat font-medium mt-6">{{ props.exhibitionsDetail.englishName }}</h2>
            <h1 class="text-2xl text-def font-bold mt-1 ">{{ props.exhibitionsDetail.eventName }}</h1>
            <div class="w-full flex flex-row">
                <div class="flex flex-col mt-5 w-auto  mr-8 space-y-2 whitespace-nowrap">
                    <span>기간</span>
                    <span>개최주기</span>
                    <span>장소</span>
                    <span>주최</span>
                    <span>웹사이트 </span>
                </div>
                <div class="flex flex-col mt-5 w-auto space-y-2 whitespace-pre-wrap">
                    <span>{{ eventPeried(props.exhibitionsDetail.startDate, props.exhibitionsDetail.finishDate) }}</span>
                    <span>{{ props.exhibitionsDetail.frequency }}</span>
                    <span>{{ props.exhibitionsDetail.venue }}</span>
                    <span>{{ props.exhibitionsDetail.organizer }}</span>
                    <span>{{ props.exhibitionsDetail.organizerWebsite }}</span>
                </div>
            </div>
        </div>
    </div>

    <!-- {{ props.exhibitionsDetail }} -->
</template>
<script setup>
import { eventPeried } from '~/utils/formatUnit';
const props = defineProps({
    exhibitionsDetail : {type : Object, required : true},
})
</script>

<style>
    
</style>