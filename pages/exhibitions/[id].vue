<template>
    <div class="xl:w-[1024px] w-full min-h-screen  mx-auto mb-40 ">
        <div v-if="!pending">
            <InfoDetail 
            :exhibitionsDetail="data.exhibitionDetail" 
            :userActions="data.userActions" />
            <DetailPhotos
            :images="data.exhibitionDetail.images" 
            />
            <ExhibitionReview/>
            <RelativeExhibitions 
            :category="data.exhibitionDetail.category"
            :list="data.exhibitionsByCategory"/>
        </div>
    </div>
</template>
<script setup>
import { useRoute } from 'vue-router';
import InfoDetail from '~/components/exhibitions/InfoDetail.vue';
import DetailPhotos from '~/components/exhibitions/DetailPhotos.vue';
import RelativeExhibitions from '~/components/exhibitions/RelativeExhibitions.vue';
import ExhibitionReview from '~/components/exhibitions/ExhibitionReview.vue';
const auth = useAuth();
const route = useRoute();
const loggedInUser = computed(() => auth.data.value.user.rows[0])
const exhibitionId = Array.isArray(route.params.id) ? route.params.id[0] : route.params.id;


const { data, pending, error, refresh } = useAsyncData(async () => {
    const exhibitionStore = useExhibitionStore();
    // 먼저 전시회 상세 정보를 불러옵니다.
    await exhibitionStore.fetchExhibitionDetail(exhibitionId);
    // console.log(exhibitionStore.exhibitionDetail)
    // 전시회 상세 정보를 바탕으로 비슷한 카테고리의 전시회 목록을 불러옵니다.
    // 여기서는 exhibitionStore 내의 상태를 직접 사용하여 인자를 넘겨줍니다.
    const category = exhibitionStore.exhibitionDetail?.category;
    console.log(category)
    if (category) {
        await exhibitionStore.fetchSimilarExhibitions(category);
    }
    if(loggedInUser){
        await exhibitionStore.fetchUserActions(exhibitionId, loggedInUser?.value.id)
    }
    // 두 조회 결과를 함께 반환합니다.
    return {
        exhibitionDetail: exhibitionStore.exhibitionDetail,
        exhibitionsByCategory: exhibitionStore.exhibitionsByCategory,
        userActions : exhibitionStore.userActions,
    };
});

</script>

<style>
    
</style>