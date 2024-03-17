<template>
    <div class="flex flex-col w-[900px] bg-yellow- mt-8">

        <h1 class="font-bold text-xl mt-8">리뷰</h1>
        <!-- <div class="w-full bg-zinc-200 rounded-2xl h-[200px] mt-4">
            Feature Rating
4.8Quality of Participants
4.4Variety of Products
5.0Display & Presentation
3.3Networking Opportunity
4.0Exhibitors & Vendors
5.0Format of Event
5.0Quality of Products
Organizer Rating
5.0Communication
4.8Registration Process
5.0Staff Helpfulness
3.5Execution Quality
4.0Arrangements
5.0Shuttle Service
User Rating
4.2/5
79 Ratings | 36 Reviews
        </div> -->
        <div class="w-full bg-zinc-50 ring-1 ring-zinc-100 rounded-2xl py-4 px-6  h-[100px] mt-4" >
            <p class="font-medium ">전시회 리뷰를 남겨주세요</p>
            <div class="w-auto h-auto mt-2 flex flex-row space-x-4"  @click="handleWrite">
                <img src="~/assets/img/icon/defaultProfile.svg" alt="" class="h-8 ">
                <div class="ring-1 ring-zinc-200 bg-white rounded-full w-12/12 cursor-text" ></div>
            </div>
        </div>
        <div class="w-full bg-zinc-50 ring-1 ring-zinc-100 rounded-2xl py-4 px-6  h-atuo mt-4" >
            <ReviewsList/>
        </div>
    </div>
    <div v-if="isWriteReview">
        <WriteReview @close="handleWrite" />
    </div>

</template>
<script setup>
import WriteReview from '~/components/exhibitions/WriteReview.vue';
import ReviewsList from '~/components/exhibitions/ReviewsList.vue';
const isWriteReview = ref(false);
const handleWrite = () =>{
    isWriteReview.value = !isWriteReview.value
}
</script>