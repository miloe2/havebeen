<template >
    <div class="xl:w-[1024px] w-full min-h-screen  mx-auto mb-40">
        <MonthButton/>
        <CalanderList @set-scroll="scrollToSection"/>
        <div ref="list" class="pt-20">
            <ExhibitionsList />
        </div>
    </div>
</template>
<script setup lang="ts">
import { watch, ref } from 'vue';
import ExhibitionsList from '~/components/exhibitions/ExhibitionsList.vue';
import CalanderList from '~/components/calander/CalanderList.vue';
import MonthButton from '~/components/exhibitions/MonthButton.vue';
const exhibitionStore = useExhibitionStore();
const year = computed(() => exhibitionStore.searchYear);
const month = computed(() => exhibitionStore.searchMonth);
const { data: exhibitionsByMonth, pending, error, refresh } = useAsyncData(async () => {
    await exhibitionStore.fetchExhibitions(year.value, month.value);
    return exhibitionStore.exhibitionsByMonth;
});
watch([year, month], () => {
    refresh();
});
const list = ref<HTMLElement>();
const scrollToSection = () => {
    if (list.value) {
        list.value.scrollIntoView({ behavior: "smooth" });
    }
}


</script>
<style >
    
</style>