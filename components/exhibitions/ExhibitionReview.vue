<template>
    <div class="flex flex-col w-[900px] bg-yellow- mt-8">

        <h1 class="font-bold text-lg mt-8">리뷰</h1>
        <div class="w-full bg-zinc-200 rounded-2xl h-[200px] mt-4">
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
        </div>
        <div class="w-full bg-zinc-200 rounded-2xl h-[100px] mt-4" @click="handleWrite" >
            리뷰쓰기
        </div>
        <div class="w-full bg-zinc-200 rounded-2xl h-[200px] mt-4">
            리뷰들
        </div>
    </div>
    <div v-if="isWriteReview">
        <WriteReview @close="handleWrite" />
    </div>

</template>
<script setup>
import WriteReview from '~/components/exhibitions/WriteReview.vue'
const isWriteReview = ref(false);
const handleWrite = () =>{
    isWriteReview.value = !isWriteReview.value
}
</script>