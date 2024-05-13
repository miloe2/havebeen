<template >
    <div class="text-3xl font-bold montserrat ">List</div>
    <div class="w-full mt-4 h-auto grid min-h-screen  
    xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 ">
        <ul v-for="(item, index) in list" :key="index" class="w-full">
            <li class="w-full space-y-1 cursor-pointer" @click="goToDetail(item)">
                <ExhibitionsCard 
                :eventName="item.eventName"
                :shortName="item.shortName"
                :englishName="item.englishName"
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



</script>
<style >
    
</style>
