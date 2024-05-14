<template>
    <div class="w-full h-auto bg-red-0">
        <!-- <button @click="() => {console.log(plannedExpo)}">check</button> -->
        <!-- {{ days }} {{ month }}  -->
        <!-- <div class="text-3xl font-bold montserrat">Calandar</div> -->
        <div class="bg-yellow-00 w-full h-auto mt-1">

            <div class="bg-yellow-00 ">
                <ul class="grid grid-cols-7">
                    <li 
                    class="border-y border-solid border-zinc-200 p-3 text-sm"
                    v-for="(date, index) in dates" :key="index">{{ date }}</li>
                </ul>
                <ul class="grid grid-cols-7">
                    <li class="border-b border-solid border-zinc-200 ring-zinc-100 px-2 py-3 min-h-32 h-auto " 
                    v-for="(day, index) in days" :key="index">
                         <span class="font-bold text-def">{{ day }}</span>
                        <div 
                        v-for="(expo, index) in printExpoInCalendar(day)" :key="expo.id"

                        @click="updateScroll"
                        class="text-xs flex items-center w-auto mt-2 pl-2 py-1 bg-zinc-50 cursor-pointer">
                            <div class="w-2 h-2 rounded-full mr-2 flex-shrink-0"                        
                            :style="`background-color : ${expo.color}`"></div>
                            
                            <div class="truncate">{{ expo.event }}</div> 
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
const colors = ['#d6d3d1','#fca5a5', '#fdba74', '#fcd34d', '#fde047', '#bef264', '#86efac',  '#6ee7b7', '#5eead4', '#67e8f9', '#7dd3fc'  ]
const days = ref([]);
const emits = defineEmits(['setScroll']);
const updateScroll = () =>{ 
    emits('setScroll');
}

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
        let start = new Date(e.startDate); // startDate 문자열을 Date 객체로 변환
        // let start = startDate.getDate(); // UTC 기준 일자만 추출
        let finish = new Date(e.finishDate);
        // let finish = finishDate.getDate();
        let event = e.englishName; 
        plannedExpo.value.push({ start, event, finish });
    })
};

const printExpoInCalendar = (day) => {
    const targetDate = new Date(year.value, month.value - 1, day); // 월은 0에서 시작하므로 1을 빼줍니다.
    return plannedExpo.value.reduce((acc, cur, index) => {
        // console.log(targetDate, cur.start, cur.finish)
        if (targetDate >= cur.start && targetDate <= cur.finish) {
            const colorIndex = index % colors.length;
            acc.push({
                date: targetDate.getDate(),
                event: cur.event,
                color: colors[colorIndex]
            });
        };
        return acc;
    }, []);
};
// const printExpoInCalendar = (day) => {
//     return plannedExpo.value.reduce((acc, cur, index) => {
//         if (day >= cur.start && day <= cur.finish) {
//             // 색상 인덱스를 이벤트 ID 또는 순서에 따라 할당
//             const colorIndex = index % colors.length;
//             acc.push({
//                 date: day,
//                 event: cur.event,
//                 color: colors[colorIndex]
//             });
//         }
//         return acc;
//     }, []);
// };

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
    const lastDay = new Date(year.value, month.value, 0);
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