<template>
    <div>
        <!-- <div>
            정렬 : 최신, 이미지, 방문자
        </div> -->
        <div v-if="reviewList" 
            v-for="(item, index) in reviewList" :key="index" class=" py-4">
            <div class="flex justify-between bg-blue-00 ">
                <div class="flex items-center">
                    <img src="~/assets/img/icon/defaultProfile.svg" alt="" class="w-10 mr-3">
                    <span class="font-bold text-lg">{{ item.user_name }}</span>
                </div>
                <div class="flex flex-col items-end">
                    <!-- <span> {{ formattedDate(item.created_at) }}</span> -->
                    <span class=""> {{ formattedVisitType(item.visitor_type) }} </span>
                    <div class="fontawesome px-2 bg-zinc-900 w-12 rounded-md mt-1"> 
                        <i class="fa fa-star text-yellow-400 mr-1"></i>
                        <span class="text-zinc-200 ">{{ item.rate_stars}} </span>
                    </div>
                </div>
            </div>
            <p class="my-2">{{ item.comment }}</p>
            <div class="w-auto h-24 flex space-x-2">
                <div v-for="img in extractImages(item)" :key="item.id">
                    <img :src="img" alt="" class=" object-cover rounded-md w-40 h-full">
                </div>
            </div>
            <div class=" w-full h-auto flex mt-4 space-x-2">
                <div v-for="(item, index) in tagSlice(item.tag)" :key="index" class="px-3 text-xs  font-light py-1 rounded-full text-stone-50 bg-stone-950 flex justify-center items-center">{{ item }}</div>
            </div>
            
            <div v-if="index !== reviewList.length -1" class="bg-zinc-200 w-full h-[2px] mt-8"></div>
            <div v-else class="w-full  mt-8  flex justify-center">  
                <span class="px-10 py-2 cursor-pointer rounded-full ring-1 ring-zinc-500 hover:ring-2 hover:font-bold transition-all duration-200 text-sm">더보기</span> 
            </div>
        </div>
        
    </div>
</template>
<script setup>
import { formattedDate, formattedVisitType, tagSlice } from '~/utils/formatUnit';
import axios from 'axios';
const route = useRoute();
const exhibitionId = route.params.id;
const reviewList = ref();
const extractImages = (review) => {
    // 이미지 필드명을 배열로 정의합니다.
    const imageFields = ['img1', 'img2', 'img3'];

    // reduce 메서드를 사용하여 이미지 URL 배열을 생성합니다.
    return imageFields.reduce((acc, field) => {
        const imageUrl = review[field];
        if (imageUrl) { // imageUrl이 존재하면 (null이 아니면)
            acc.push(imageUrl); // 결과 배열에 추가합니다.
        }
        return acc; // 변경된 결과 배열을 반환합니다.
    }, []); // 초기값으로 빈 배열을 사용합니다.
};
const fetchReviewsList = async() => {
    try {
        const rsp = await axios.get(`/api/exhibitions/${exhibitionId}/reviews-list`);
        reviewList.value =rsp.data;
        return rsp;
    } catch (error){
        console.log(error)
    }
}
onMounted(() => {
    fetchReviewsList();
})


// const dummy = [
//     {
//         id : 1,
//         user_id : 'a', // users table과 join으로 nickname 호출
//         rate_Stars : 4,
//         visited : true,
//         visitType : 0, // 0: visitor , 1 : buyer, 2: exhibitor
//         comment : '좋았어요',
//         created_at : new Date() ,
//         tag : ['B2B', '전시장 위치', '전시장 시설'],
//         img_cnt : 0, 
//         img1 : 'https://source.unsplash.com/random/300×300',
//         img2 : null,
//         img3 : null,
        
//     },
//     {
//         id : 2,
//         user_id : 'a', // users table과 join으로 nickname 호출
//         rate_Stars : 4,
//         visitType : 0, // 0: visitor , 1 : buyer, 2: exhibitor

//         visited : true,
//         comment : '좋았어요',
//         created_at : new Date() ,
//         tag : ['B2B', '전시장 위치', '전시장 시설'],
//         img_cnt : 0, 
//         img1 : 'https://source.unsplash.com/random/300×300',
//         img2 : null,
//         img3 : null,
        
//     },
//     {
//         id : 3,
//         user_id : 'a', // users table과 join으로 nickname 호출
//         rate_Stars : 4,
//         visitType : 0, // 0: visitor , 1 : buyer, 2: exhibitor

//         visited : true,
//         comment : '좋았어요',
//         created_at : new Date() ,
//         tag : ['B2B', '전시장 위치', '전시장 시설'],
//         img_cnt : 0, 
//         img1 : 'https://source.unsplash.com/random/300×300',
//         img2 : null,
//         img3 : null,
        
//     },
// ]
</script>
<style >
    
</style>