<template >
    <!-- <div class="w-full min-h-screen flex justify-center items-center bg-red-500" v-if="pending">로딩중~~</div> -->
    <div class="text-3xl font-bold montserrat">Schedule</div>
    <div class="montserrat text-2xl font-bold mt-4 flex flex-row">
            <img src="/assets//img/icon/longArrow.svg" alt="" class="cursor-pointer w-10 rotate-180 mr-4" @click="handleLeftBtn">
            <span class="mr-2">{{ year }}.</span>   <span> {{ month }}</span>
            <img src="/assets//img/icon/longArrow.svg" alt="" class="cursor-pointer w-10 ml-4" @click="handleRightBtn">
        </div>

    <div class="w-full mt-4 h-auto grid  
    xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 ">
        <ul v-for="(item, index) in list" :key="index" class="w-full">
            <li class="w-full space-y-1 cursor-pointer" @click="goToDetail(item)">
                <ExhibitionsCard 
                :eventName="item.eventName"
                :shortName="item.shortName"
                :englishName="item.shortName"
                :country = "item.country"
                :city = "item.city"
                :startDate = "item.startDate"
                :venue = "item.venue"
                :finishDate = "item.finishDate"
                :i = "index"/>                
            </li>
        </ul>
    </div>
</template>
<script setup>
import ExhibitionsCard from './ExhibitionsCard.vue';
import { useExhibitionStore } from '~/stores/exhibitionStore';
import debounce from 'lodash/debounce';
const router = useRouter();
// const today = new Date();
// const year = ref(today.getFullYear());
// const month = ref(today.getMonth() + 1);
// const searchDate = ref(`${year.value}-${month.value.toString().padStart(2, '0')}`);
const exhibitionStore = useExhibitionStore();
const year = computed(() => exhibitionStore.searchYear);
const month = computed(() => exhibitionStore.searchMonth);
const exhibitionsByMonth = computed(() => exhibitionStore.exhibitionsByMonth)
const searchDate = computed(() => `${year.value}-${month.value.toString().padStart(2, '0')}`);
const list = computed(() => exhibitionsByMonth.value?.find(m => m.month === searchDate.value)?.data || [])

// const { data: exhibitionsByMonth, pending, error, refresh } = useAsyncData(async () => {
//     const exhibitionStore = useExhibitionStore();
//     await exhibitionStore.fetchExhibitions(year.value, month.value);
//     return exhibitionStore.exhibitionsByMonth;
// });
const goToDetail = (item) => {
    router.push(`/exhibitions/${item.id}`)
}
const handleRightBtn = debounce(() => {
    exhibitionStore.incrementMonth();
}, 100)
const handleLeftBtn = debounce(() => {
    exhibitionStore.decrementMonth();
}, 100)


</script>
<style >
    
</style>
