<template>
    <div>
        <div>
            정렬 : 최신, 이미지, 방문자
        </div>
        <div v-for="(item, index) in dummy" :key="index" class=" py-4">
            <div class="flex justify-between ">
                <div class="flex items-center">
                    <img src="~/assets/img/icon/defaultProfile.svg" alt="" class="w-8 mr-4">
                    <span class="font-bold">{{ item.user_id }}</span>
                </div>
                <div class="flex flex-col">
                    <!-- <span> {{ formattedDate(item.created_at) }}</span> -->
                    <span> {{ formattedVisitType(item.visitType) }} </span>
                    <span> {{ `별 ${item.rate_Stars}`}} </span>
                </div>
            </div>
            <p class="my-2">{{ item.comment }}</p>
            <div class="w-40 h-24">
                <img :src="item.img1" alt="" class="w-full h-full object-cover rounded-md">
            </div>
            <div class=" w-full h-auto flex mt-4 space-x-2">
                <div v-for="(item, index) in item.tag" :key="index" class="px-3 text-xs  font-light py-1 rounded-full text-stone-50 bg-stone-950 flex justify-center items-center">{{ item }}</div>
            </div>
            
            <div v-if="index !== dummy.length -1" class="bg-zinc-200 w-full h-[2px] mt-8"></div>
            <div v-else class="w-full  mt-8  flex justify-center">  
                <span class="px-10 py-2 cursor-pointer rounded-full ring-1 ring-zinc-500 hover:ring-2 hover:font-bold transition-all duration-200 text-sm">더보기</span> 
            </div>
        </div>
        
    </div>
</template>
<script setup>
import { formattedDate } from '~/utils/formatUnit';
// Feature Rating 4.8Quality of Participants 4.4Variety of Products 5.0Display & Presentation 3.3Networking Opportunity 4.0Exhibitors & Vendors 5.0Format of Event 5.0Quality of Products Organizer Rating 5.0Communication 4.8Registration Process 5.0Staff Helpfulness 3.5Execution Quality 4.0Arrangements 5.0Shuttle Service User Rating 4.2/5 79 Ratings | 36 Reviews
const formattedVisitType = (type) => {
    switch(type) {
        case 0 : return 'Visitor'
        case 1 : return 'Buyer'
        case 2 : return 'Exhibitior' 
        case 3 : return 'Media' 
    }
}

const dummy = [
    {
        id : 1,
        user_id : 'a', // users table과 join으로 nickname 호출
        rate_Stars : 4,
        visited : true,
        visitType : 0, // 0: visitor , 1 : buyer, 2: exhibitor
        comment : '좋았어요',
        created_at : new Date() ,
        tag : ['B2B', '전시장 위치', '전시장 시설'],
        img_cnt : 0, 
        img1 : 'https://source.unsplash.com/random/300×300',
        img2 : null,
        img3 : null,
        
    },
    {
        id : 2,
        user_id : 'a', // users table과 join으로 nickname 호출
        rate_Stars : 4,
        visitType : 0, // 0: visitor , 1 : buyer, 2: exhibitor

        visited : true,
        comment : '좋았어요',
        created_at : new Date() ,
        tag : ['B2B', '전시장 위치', '전시장 시설'],
        img_cnt : 0, 
        img1 : 'https://source.unsplash.com/random/300×300',
        img2 : null,
        img3 : null,
        
    },
    {
        id : 3,
        user_id : 'a', // users table과 join으로 nickname 호출
        rate_Stars : 4,
        visitType : 0, // 0: visitor , 1 : buyer, 2: exhibitor

        visited : true,
        comment : '좋았어요',
        created_at : new Date() ,
        tag : ['B2B', '전시장 위치', '전시장 시설'],
        img_cnt : 0, 
        img1 : 'https://source.unsplash.com/random/300×300',
        img2 : null,
        img3 : null,
        
    },
]
</script>
<style >
    
</style>