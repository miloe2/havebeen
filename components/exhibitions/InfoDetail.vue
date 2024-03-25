<template >
    <div class="flex w-[900px] bg-yellow-">
        <div class="w-full h-80">
            <img :src="`https://source.unsplash.com/random/400x300`" alt="" class="card-image w-full h-full object-cover" loading="lazy">
        </div>
        <div class="flex flex-col pl-10 w-full pt-[6px]">
            <div class="text-sm font-medium">
                <span class=" py-1 border-t-2 border-b-2 border-solid border-red-500 mr-3">{{ props.exhibitionsDetail.category}}</span>
                <span class=" py-1 border-t-2 border-b-2 border-solid border-green-500 mr-1">{{ props.exhibitionsDetail.country}}</span>
            </div>
            <h2 class="text-sub montserrat font-medium mt-6">{{ props.exhibitionsDetail.englishName }}</h2>
            <h1 class="text-2xl text-def font-bold mt-1 ">{{ props.exhibitionsDetail.eventName }}</h1>
            <div class="w-full flex flex-row bg-red50">
                <div class="flex flex-col mt-5 w-auto  mr-8 space-y-1 whitespace-nowrap">
                    <span>기간</span>
                    <span>개최주기</span>
                    <span>장소</span>
                    <span>주최</span>
                    <span>웹사이트 </span>
                </div>
                <div class="flex flex-col mt-5 w-auto space-y-1 whitespace-pre-wrap ">
                    <span>{{ eventPeried(props.exhibitionsDetail.startDate, props.exhibitionsDetail.finishDate) }}</span>
                    <span>{{ props.exhibitionsDetail.frequency }}</span>
                    <span>{{ props.exhibitionsDetail.venue }}</span>
                    <span>{{ props.exhibitionsDetail.organizer }}</span>
                    <span>{{ props.exhibitionsDetail.organizerWebsite }}</span>
                </div>
            </div>
            <div class="mt-3 flex space-x-3 ">
                <div class="flex ring-1 rounded-full px-3 h-7 transition-all duration-100"  
                @click="handleLike"
                :class=" isLiked ? 'ring-red-500 text-zinc-50 bg-red-500' : 'text-zinc-500 ring-zinc-500' ">
                    <button class=" flex flex-row items-center">
                        <i :class="isLiked ? 'fas fa-heart' : 'far fa-heart'" class="bg-blue-0 text-base"></i>
                    </button>
                </div>

                <div class="flex ring-1 rounded-full px-3 h-7 transition-all duration-100"  
                @click="handleVisit"
                :class=" isVisit ? 'ring-green-500 text-zinc-50 bg-green-500' : 'text-zinc-500 ring-zinc-500' ">
                    <button class=" flex flex-row items-center">
                        <i :class="isVisit ? 'fas fa-check mr-1': 'hidden'" class="bg-blue-0 text-base"></i>
                    </button>
                    <div class="flex justify-center items-center">{{ isVisit ? 'VISITED' : 'VISIT' }}</div>
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
    userActions : {type : Object },
});
const isLiked = ref(false);
const isVisit = ref(false);

const likeValue = props.userActions?.find(l => {
    console.log(l.action_type , l.action_value)
    l.action_type === 'like';
    isLiked.value = l.action_value;
});
const visitValue = props.userActions?.find(v => {
    console.log(v.action_type , v.action_value)
    v.action_type === 'visited';
    isVisit.value = v.action_value;
});

const handleLike = () => {
    isLiked.value = !isLiked.value
}
const handleVisit = () => {
    isVisit.value = !isVisit.value
}
</script>

<style scoped>
@import url('https://use.fontawesome.com/releases/v5.15.4/css/all.css');
</style>