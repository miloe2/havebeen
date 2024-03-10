<template >
    <div class="text-3xl font-bold montserrat">Schedule</div>
    <div class="montserrat text-2xl font-bold mt-4">2024</div>
    <div class="w-full mt-4 h-auto grid  
    xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 ">
        <ul v-for="(item, index) in exhibitionsByMonth[0].data" :key="index" class="w-full">
            <li class="w-full space-y-1 cursor-pointer">
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
import { useAsyncData } from 'nuxt/app'
const today = new Date();
const year = ref(today.getFullYear());
const month = ref(today.getMonth() + 1);
// onMounted(() => {
//     console.log(year.value);
//     console.log(month.value);
// })


const { data: exhibitionsByMonth, pending, error, refresh } = useAsyncData(async () => {
    const exhibitionStore = useExhibitionStore();
    await exhibitionStore.fetchExhibitions(year.value, month.value);
    return exhibitionStore.exhibitionsByMonth;
})
</script>
<style >
    
</style>