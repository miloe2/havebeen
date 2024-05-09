<template>
    <div class="w-full h-auto bg-red-0">
        <button @click="() => {console.log(plannedExpo)}">check</button>
        {{ list }}
        <div class="bg-yellow-00 w-full h-auto">
            <div class="flex space-x-4">
                <button @click="handleLeftBtn"><</button>
                <div>{{ month }}</div>
                <button @click="handleRightBtn">></button>
            </div>
            <div class="bg-yellow-00 ">
                <ul class="grid grid-cols-7">
                    <li 
                    class="ring-1 ring-zinc-100 p-3"
                    v-for="(date, index) in dates" :key="index">{{ date }}</li>
                </ul>
                <ul class="grid grid-cols-7">
                    <li class="ring-1 ring-zinc-100 px-2 py-3 h-32" 
                    v-for="(day, index) in days" :key="index">
                        {{ day }}
                        <div 
                        v-for="(expo, index) in printExpoInCalendar(day)" :key="expo.id"
                        :style="`background-color : ${colors[index]}`"
                        class="text-sm truncate mb-2">
                            {{ expo.event }} {{ index }}
                        </div>
                    </li>

                </ul>
            </div>
            
        </div>
    </div>
</template>
<script setup>
import debounce from 'lodash/debounce';

const dates = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT' ];
const colors = [ '#faf5ff', '#f0fdf4', '#ecfeff', '#fffbeb', '#fff1f2']
// const colors = ['blue', 'red', 'green', 'yellow', 'purple', ]
const days = ref([]);
const today = new Date();

const exhibitionStore = useExhibitionStore();
const year = computed(() => exhibitionStore.searchYear);
const month = computed(() => exhibitionStore.searchMonth);
const exhibitionsByMonth = computed(() => exhibitionStore.exhibitionsByMonth)
const searchDate = computed(() => `${year.value}-${month.value.toString().padStart(2, '0')}`);
const list = computed(() => exhibitionsByMonth.value?.find(m => m.month === searchDate.value)?.data || []);
const plannedExpo = ref([]);
const calcPlannedExpo = () => {
    plannedExpo.value = [];
    list.value.map(e => {
        let startDate = new Date(e.startDate); // startDate 문자열을 Date 객체로 변환
        let start = startDate.getUTCDate(); // UTC 기준 일자만 추출
        let finishDate = new Date(e.finishDate);
        let finish = finishDate.getUTCDate();
        let event = e.englishName; 
        plannedExpo.value.push({ start, event, finish });
    })
};

const printExpoInCalendar = (day) => {
    return plannedExpo.value.filter(e => day >= e.start && day <= e.finish)
        .map(e => ({ date: day, event: e.event, id: e.id }));
};

watch(list, () => {
    generateCalendar()
    calcPlannedExpo(); 
});

const handleRightBtn = debounce(() => {
    exhibitionStore.incrementMonth();
}, 100)
const handleLeftBtn = debounce(() => {
    exhibitionStore.decrementMonth();
}, 100)
const generateCalendar = () => {
    days.value = [];
    const firstDay = new Date(year.value, month.value, 1);
    const lastDay = new Date(year.value, month.value + 1, 0);

    const startDayOfWeek = firstDay.getDay(); // 이 달의 첫 날의 요일 인덱스

    // 시작 요일 전까지 빈 공간으로 채우기
    for (let i = 0; i < startDayOfWeek; i++) {
        days.value.push(null);
    }

    const daysInMonth = lastDay.getDate(); // 이번 달의 총 일수
    for (let day = 1; day <= daysInMonth; day++) {
        days.value.push(day);
    }
};

onMounted(( )=> {
    generateCalendar();
    calcPlannedExpo();
})



</script>
<style>
    
</style>