<template >
    <div class="xl:w-[1150px] w-full min-h-screen  mx-auto mb-40">
        <ExhibitionsList/>
    </div>
</template>
<script setup lang="ts">
import { watch } from 'vue';
import ExhibitionsList from '~/components/exhibitions/ExhibitionsList.vue';

const exhibitionStore = useExhibitionStore();
const year = computed(() => exhibitionStore.searchYear)
const month = computed(() => exhibitionStore.searchMonth)
const { data: exhibitionsByMonth, pending, error, refresh } = useAsyncData(async () => {
    await exhibitionStore.fetchExhibitions(year.value, month.value);
    return exhibitionStore.exhibitionsByMonth;
});
watch([year, month], () => {
    refresh();
})

</script>
<style >
    
</style>