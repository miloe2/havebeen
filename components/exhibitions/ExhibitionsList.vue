<template >
    <div class="text-3xl font-bold ">전시회입니다~</div>
    <div class="w-full mt-10 h-auto grid  
    xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 ">
    <ExhibitionsCard/>
    <ExhibitionsCard/>
    <ExhibitionsCard/>
    <ExhibitionsCard/>
        <!-- <ul v-for="(item, index) in closestExhibitions" :key="index" class="w-full">
            <li class="w-full space-y-1 cursor-pointer">
                <ExhibitionsCard 
                :eventName="item.eventName"
                :englishName="item.shortName"
                :country = "item.country"
                :city = "item.city"
                :startDate = "item.startDate"
                :venue = "item.venue"
                :finishDate = "item.finishDate"
                :i = "index"/>                
            </li>
        </ul> -->
    </div>
</template>
<script setup>
import ExhibitionsCard from './ExhibitionsCard.vue';
</script>
<style >
    
</style>