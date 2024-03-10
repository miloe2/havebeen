<template>
    <div class="text-3xl font-bold montserrat">What's Coming</div>
    <div class="w-full mt-10 h-auto grid  
    xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4  ">
        <ul v-for="(item, index) in closestExhibitions" :key="index" class="w-full">
            <li class="w-full space-y-1 cursor-pointer">
                <CardItem 
                :eventName="item.eventName"
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
<script setup lang="ts">
import { useExhibitionStore } from '~/stores/exhibitionStore';
import CardItem from '~/components/home/CardItem.vue'
import { useAsyncData } from 'nuxt/app'


const { data: closestExhibitions, pending, error, refresh } = useAsyncData(async () => {
    const exhibitionStore = useExhibitionStore();
    await exhibitionStore.fetchClosestExhibitions();
    return exhibitionStore.closestExhibitions;
})
</script>