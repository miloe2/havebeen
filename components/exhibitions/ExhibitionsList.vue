<template>
    <div class="text-3xl font-bold montserrat">What's Coming</div>
    <div class="w-full mt-10 h-auto grid  
    xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4  ">
        <ul v-for="(item, index) in list" :key="index" class="w-full">
            <li class="w-full space-y-1 cursor-pointer">
                <CardItem 
                :eventName="item.eventName"
                :englishName="item.shortName"
                :country = "item.country"
                :city = "item.city"
                :startDate = "item.startDate"
                :finishDate = "item.finishDate"
                :i = "index"/>                
            </li>
        </ul>
    </div>
</template>
<script setup lang="ts">
import { onMounted } from 'vue';
import { useExhibitionStore } from '~/stores/exhibitionStore';
import CardItem from '~/components/exhibitions/CardItem.vue'

const exhibitionStore = useExhibitionStore();
const list = computed(() => exhibitionStore.$state.closestExhibitions)
onMounted(async() => {
    await exhibitionStore.fetchClosestExhibitions();
});

</script>
<style scoped>

</style>
<!-- {{ item.country  }}
                {{ item.city  }}
                {{ item.category  }}
                {{ item.englishName  }}
                {{ item.startDate  }}
                {{ item.finishDate  }} -->