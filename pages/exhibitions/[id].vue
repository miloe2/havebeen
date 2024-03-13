<template>
    <div class="xl:w-[1150px] w-full min-h-screen  mx-auto mb-40 bg-red-50">
        <div v-if="!pending">
            <InfoDetail :exhibitionsDetail="data.exhibitionDetail" />
            <RelativeExhibitions 
            :category="data.exhibitionDetail.category"
            :list="data.exhibitionsByCategory"
            />
            <!-- {{ exhibitionDetail[0]  }} -->
         </div>
        <!-- {{ data.exhibitionsByCategory }} -->

    </div>
</template>
<script setup>
// import { useSSRContext } from 'vue';
import { useRoute } from 'vue-router';
import InfoDetail from '~/components/exhibitions/InfoDetail.vue';
import RelativeExhibitions from '~/components/exhibitions/RelativeExhibitions.vue'
// const { params } = useSSRContext();
// const exhibitionId = params.id;
// let exhibitionId = parseInt(route.params.id, 10);
// const exhibitionId = parseInt(route.params.id as string, 10);
const route = useRoute();
const exhibitionId = Array.isArray(route.params.id) ? route.params.id[0] : route.params.id;
const { data, pending, error, refresh } = useAsyncData(async () => {
    console.log(exhibitionId)
    // console.log(params)
    const exhibitionStore = useExhibitionStore();
    // 먼저 전시회 상세 정보를 불러옵니다.
    console.log('start')
    await exhibitionStore.fetchExhibitionDetail(exhibitionId);
    // console.log(exhibitionStore.exhibitionDetail)
    // 전시회 상세 정보를 바탕으로 비슷한 카테고리의 전시회 목록을 불러옵니다.
    // 여기서는 exhibitionStore 내의 상태를 직접 사용하여 인자를 넘겨줍니다.
    const category = exhibitionStore.exhibitionDetail?.category;
    console.log(category)
    if (category) {
        await exhibitionStore.fetchSimilarExhibitions(category);
    }

    // 두 조회 결과를 함께 반환합니다.
    return {
        exhibitionDetail: exhibitionStore.exhibitionDetail,
        exhibitionsByCategory: exhibitionStore.exhibitionsByCategory,
    };
});

// let exhibitionId = route.params.id as string;
// const exhibitionId = route.params.id as string;
// const { data: exhibitionDetail, pending, error, refresh } = useAsyncData(async () => {
//     const exhibitionStore = useExhibitionStore();
//     await exhibitionStore.fetchExhibitionDetail(exhibitionId);
//     await exhibitionStore.fetchSimilarExhibitons(exhibitionDetail[0].category);

//     return {exhibitionStore.exhibitionDetail , exhibitionStore.exhibitionsByCategory};
// });
// const { data: exhibitionsByCategory } = useAsyncData(async () => {
//     const exhibitionStore = useExhibitionStore();
//     await exhibitionStore.fetchSimilarExhibitons(exhibitionDetail[0].category);
//     return exhibitionStore.exhibitionsByCategory;
// });
// `exhibitionId`를 사용하여 데이터를 가져오는 로직
</script>

<style>
    
</style>