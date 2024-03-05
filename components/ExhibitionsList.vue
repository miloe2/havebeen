<template>
    <h1 class="text-3xl font-bold">What's Coming</h1>
    <div class="w-[1024px] bg-red-50 h-auto flex">
        <ul v-for="(item, index) in list" :key="index" class="w-full">
            <li class="ring-1 ring-zinc-500 w-full space-y-1">
                {{ item  }}
                {{ item.country  }}
                {{ item.city  }}
                {{ item.category  }}
                {{ item.englishName  }}
                {{ item.startDate  }}
                {{ item.finishDate  }}
            </li>
        </ul>
    </div>

</template>
<script setup lang="ts">
import { onMounted } from 'vue';
import { useExhibitionStore } from '~/stores/exhibitionStore';
import ExhibitionsList from '~/components/ExhibitionsList.vue';
const exhibitionStore = useExhibitionStore();
const list = computed(() => exhibitionStore.$state.closestExhibitions)
// const currentPage = ref(1);
// const plusBtn = async () => {
//     currentPage.value++;
//     console.log(currentPage.value);
//     await exhibitionStore.fetchExhibitions(currentPage.value)
// }
onMounted(async() => {
    await exhibitionStore.fetchClosestExhibitions();
});

</script>
<style scoped>
    
</style>