<template>
    <DimmedBlack :opacity="0.4"/>
    <div class="w-screen h-screen  fixed top-0 left-0 z-[900]">
        <div class="w-[640px] h-180 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl px-10 pt-4">
            <div class="flex bg-red-5  justify-end"><button @click="closeBtn" class="font-thin text-4xl" > &times;</button></div>

            <div class="flex flex-col">
                <label for="file">
                    <div class="btn-upload mr-4 mb-4 shadow-sm ring-1 ring-zinc-200">
                    <img src="~/assets/img/icon/camera.svg" alt="" class="w-6 h-6" />
                    </div>
                </label>
                <input type="file" name="file" id="file" @change="upload" multiple accept="image/*"/>
            </div>

            <div class="w-full flex items-center"> 
                <img src="~/assets/img/icon/defaultProfile.svg" alt="" class="w-7 h-7 mr-2 ">
                <p class="font-medium">ID ? anyone</p>
            </div>
            <div class="w-full bg-red-0 mt-4">
                <textarea rows="3" class="w-full rounded-sm ring-1 ring-zinc-400 text-sm p-2 "
                v-model="reviewText" 
                placeholder="리뷰를 작성해주세요"></textarea>
            </div>
            <div class="w-full bg-red-0 mt-4 flex flex-col">
                <p class="font-semibold mb-2"> 전반적인 박람회 경험은 어땠나요?  </p>
                <RateStar @update:star="handleStarRate"/>
            </div>
            <div class="w-full bg-red-0 mt-4 flex flex-col">
                <p class="font-semibold">참가 유형 </p>
                <div class="mt-3">
                    <button class="px-3 py-1 mr-2 mb-2 rounded-full text-sm cursor-pointer" 
                    :class="visitorType === 'visitor' ? 'bg-stone-950 text-stone-50' : 'bg-zinc-200'"
                    @click="handleVisitor('visitor')">참관객</button>

                    <button class="px-3 py-1 mr-2 mb-2 rounded-full text-sm cursor-pointer" 
                    :class="visitorType === 'buyer' ? 'bg-stone-950 text-stone-50' : 'bg-zinc-200'"
                    @click="handleVisitor('buyer')">업계관계자</button>

                    <button class="px-3 py-1 mr-2  mb-2 rounded-full text-sm cursor-pointer" 
                    :class="visitorType === 'exhibitor' ? 'bg-stone-950 text-stone-50' : 'bg-zinc-200'"
                    @click="handleVisitor('exhibitor')">전시참가기업</button>
                </div>
            </div>
            <div class="mt-6">
                <p class="font-semibold">전시회에 좋았던 경험을 골라주세요</p>
                <!-- <div :class="{ active: isActive }"></div> -->

                <div class="w-full flex flex-wrap mt-3">
                    <div v-for="(item, index) in reviewsTag" :key="index" 
                    class="px-3 py-1 mr-3 bg-zinc-200 mb-[10px] rounded-full text-sm cursor-pointer"
                    :class="{'isSelected' : tagArray[index]}"
                    @click="handleTag(index)"
                    >
                        {{ item }}
                    </div>
                </div>
            </div>

            <div class="mt-20 w-full ">
                <MoreButton :name="'작성완료'" @action="sendReview"/>
            </div>

        </div>
    </div>
</template>
<script setup>
import MoreButton from '../Ui/MoreButton.vue';
import DimmedBlack from '~/components/Ui/DimmedBlack.vue';
import RateStar from '../Ui/RateStar.vue';
import reviewsTag from '~/assets/data/reviewsTag.json';
import axios from 'axios';
const route = useRoute();
const BASE_URL = process.env.BASE_URL;
const exhibitionId = route.params.id

const tagArray = ref(new Array(reviewsTag.length).fill(false));
const reviewText = ref();
// const handleComments = () => {
//     console.log(reviewText.value)
// }

// 리뷰 별 핸들러
const ratedStar = ref();
const handleStarRate = (value) => {
    ratedStar.value = value;
};


// 전시회 방문 타입
const visitorType = ref();
const handleVisitor = (visitType) => {
    visitorType.value = visitType;
}

// 클릭하면 색변하게 하기, tagArray는 boolean[] => 
const handleTag = (index) => {
    tagArray.value[index] = !tagArray.value[index]
};
const selectedTags = ref([]);
const findTags = () => {
    tagArray.value.filter((t, i)=> {
        if(t === true) {
            selectedTags.value.push(reviewsTag[i]);
        } 
    });

}

// 닫기 버튼
const emits = defineEmits(['close'])
const closeBtn = () => {
    emits('close')
};
const sendReview  = async () => {
    findTags();
    try{
        await axios.post(`/api/exhibitions/${exhibitionId}/reviews`, {
                user_id : 1,
                rate_stars : ratedStar.value,
                comment : reviewText.value,
                visitor_type : visitorType.value,
                tag : selectedTags.value.toString(),
                image_cnt : 1,
                img1 : "https://source.unsplash.com/random/400x300"
        });

    }   catch (error){
        console.log(error)
    } 
    closeBtn();
}

</script>
<style scoped>
.btn-upload {
    width: 5rem;
    height: 5rem;
    border-radius: 12px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
}
.isSelected {
    background-color: #0c0a09;
    color: #fafaf9;
}
.previewImg {
width: 8rem;
height: 8rem;
}
#file {
display: none;
}
input:focus,
textarea:focus {
outline: none;
}
</style>