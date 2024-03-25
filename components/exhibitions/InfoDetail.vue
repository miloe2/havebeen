<template >
    <div class="flex w-[900px] bg-yellow-">
        <div class="w-full h-80">
            <img :src="`https://source.unsplash.com/random/400x300`" alt="" class="card-image w-full h-full object-cover" loading="lazy">
        </div>
        <div class="flex flex-col pl-10 w-full pt-[6px]">
            <div class="text-sm font-medium">
                <span class=" py-1 border-t-2 border-b-2 border-solid border-red-500 mr-3">{{ props.exhibitionsDetail.category}}</span>
                <span class=" py-1 border-t-2 border-b-2 border-solid border-green-500 mr-1">{{ props.exhibitionsDetail.country}}</span>
            </div>
            <h2 class="text-sub montserrat font-medium mt-6">{{ props.exhibitionsDetail.englishName }}</h2>
            <h1 class="text-2xl text-def font-bold mt-1 ">{{ props.exhibitionsDetail.eventName }}</h1>
            <div class="w-full flex flex-row bg-red50">
                <div class="flex flex-col mt-5 w-auto  mr-8 space-y-1 whitespace-nowrap">
                    <span>기간</span>
                    <span>개최주기</span>
                    <span>장소</span>
                    <span>주최</span>
                    <span>웹사이트 </span>
                </div>
                <div class="flex flex-col mt-5 w-auto space-y-1 whitespace-pre-wrap ">
                    <span>{{ eventPeried(props.exhibitionsDetail.startDate, props.exhibitionsDetail.finishDate) }}</span>
                    <span>{{ props.exhibitionsDetail.frequency }}</span>
                    <span>{{ props.exhibitionsDetail.venue }}</span>
                    <span>{{ props.exhibitionsDetail.organizer }}</span>
                    <span>{{ props.exhibitionsDetail.organizerWebsite }}</span>
                </div>
            </div>
            <div class="mt-3 flex space-x-3 ">
                <div class="flex ring-1 rounded-full px-3 h-7 transition-all duration-100"  
                @click="handleLike"
                :class=" actionsState.like ? 'ring-red-500 text-zinc-50 bg-red-500' : 'text-zinc-500 ring-zinc-500' ">
                    <button class=" flex flex-row items-center">
                        <i :class="actionsState.like ? 'fas fa-heart' : 'far fa-heart'" class="bg-blue-0 text-base"></i>
                    </button>
                </div>

                <div class="flex ring-1 rounded-full px-3 h-7 transition-all duration-100"  
                @click="handleVisit"
                :class=" actionsState.visited ? 'ring-green-500 text-zinc-50 bg-green-500' : 'text-zinc-500 ring-zinc-500' ">
                    <button class=" flex flex-row items-center">
                        <i :class="actionsState.visited ? 'fas fa-check mr-1': 'hidden'" class="bg-blue-0 text-base"></i>
                    </button>
                    <div class="flex justify-center items-center">{{ actionsState.visited ? 'VISITED' : 'VISIT' }}</div>
                </div>
                




            </div>
        </div>
    </div>
    <!-- {{ props.exhibitionsDetail }} -->
</template>
<script setup>
import { eventPeried } from '~/utils/formatUnit';
import { debounce } from 'lodash';
const auth = useAuth();
const loggedInUser = computed(() => auth.data?.value.user.rows[0] || null)
const route = useRoute();
const exhibitionId = route.params.id;
const props = defineProps({
    exhibitionsDetail : {type : Object, required : true},
    userActions : { type : Object },
});
const actionsState = ref({
    like : 0,
    visited : 0,
})
// const isLiked = ref(false);
// const isVisit = ref(false);
const likeAction = props.userActions?.find(l => l.action_type === 'like');
const visitAction = props.userActions?.find(v => v.action_type === 'visited');
const booleanType = (value) => value === true  ? 1 : 0
const updateButtonValue = async (type) => {

    try {
        await useFetch(`/api/exhibitions/${exhibitionId}/edit-actions`,{
            method : 'POST',
            params : {
                user_id :loggedInUser.value.id,
                action_type : type,
                action_value : booleanType(actionsState.value[type])
            }
            
        }) 
    } catch (error) {
        console.log(error)        
    }
}
const debounceUpdate = debounce ((type )=>{
    updateButtonValue(type)
}, 3000 )

const handleLike = () => {
    actionsState.value.like = !actionsState.value.like;
    debounceUpdate('like')
}
const handleVisit = () => {
    actionsState.value.visited = !actionsState.value.visited;
    debounceUpdate('visited')
}
onMounted(() => {
    if (likeAction) {
        actionsState.value.like = likeAction.action_value 
    }
    if (visitAction) {
        actionsState.value.visited = visitAction.action_value 
    }
});

</script>

<style scoped>
@import url('https://use.fontawesome.com/releases/v5.15.4/css/all.css');
</style>