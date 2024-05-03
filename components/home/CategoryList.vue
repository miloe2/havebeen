<template>
    <div class="mt-20">
        <div class="text-xl font-bold  mt-8">카테고리별 전시회</div>
        <CatgoryButton @set-item="handleCountryBtn" :items="'category'"/>
        <!-- <CountryButton @set-country="handleCountryBtn"/> -->
        <div class="w-full h-auto mt-8 grid grid-cols-2 gap-4">
            <div v-for="item in dummy" :key="item.id"
                class="ring-1 ring-zinc-200 flex flex-row px-6 py-4 cursor-pointer">
                <div class="bg-zinc-200 h-full aspect-square mr-6 rounded-md"></div>
                <div class="flex flex-col">                
                    <p class="text-sm text-sub">{{ item.period }}</p>
                    <p class="font-medium">{{ item.englishName }}</p>
                    <p>{{ item.name }}</p>
                </div>
            </div>
        </div>
        <div class="bg-red-0 flex justify-center mt-10"> 
            <button class="px-10 py-2 cursor-pointer rounded-full ring-1 ring-zinc-500 hover:ring-2 hover:font-bold transition-all duration-200 text-sm">더보기</button> 
        </div>
    </div>

</template>
<script setup lang="ts">
import CatgoryButton from './CatgoryButton.vue';
const selectedItem = ref('');
const handleCountryBtn = (data :string) => {
    selectedItem.value = data;
}
const dummy = [
    {
        id : 1,
        englishName : 'Hannover Messe',
        name : '독일 하노버 산업 전시회',
        period : '2024.4.17 - 2024.4.21',
        city : '하노버',

    },
    {
        id : 2,
        englishName : 'Hannover Messe',
        name : '독일 하노버 산업 전시회',
        period : '2024.4.17 - 2024.4.21',
        city : '하노버',

    },
    {
        id : 3,
        englishName : 'Hannover Messe',
        name : '독일 하노버 산업 전시회',
        period : '2024.4.17 - 2024.4.21',
        city : '하노버',

    },
]


// 일반기계독일
// Hannover Messe
// 독일 하노버 산업 전시회
// 기간
// 개최주기
// 장소
// 주최
// 웹사이트
// 2024.4.17 - 2024.4.21
// 매년
// Hannover Messegelaende
// Deutsche Messe
// www.hannovermesse.de


</script>