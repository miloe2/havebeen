<template>
    <div class="w-full bg-stone-100 min-h-160 flex items-center  justify-center p-6 relative">
        <div class="w-full h-140 bg-white rounded-md  p-6  pb-10 ">
            <div class="flex mb-10">
                <img v-if="chatroomInfo.image" :src="chatroomInfo.image" alt="" class="w-6 h-6 rounded-full mr-2">
                            <img v-else src="~/assets/img/icon/defaultProfile.svg" alt="" class="w-6 h-6 mr-2">
                <span class="font-medium">{{ chatroomInfo.member }}님과의 채팅</span>
            </div>
            <!-- <div v-if="props.chatroom_id"> -->
            <!-- </div> -->
            <div class="w-full bg-blue-00 overflow-y-scroll h-100 scroll">

                <div class="flex flex-col" v-for="(item, index) in messages" :key="index">
                    <div v-if="item.user_id === user.id" 
                    class="flex flex-col">
                        <div class="flex flex-row items-center">
                            <img v-if="chatroomInfo.image" :src="chatroomInfo.image" alt="" class="w-8 h-8 rounded-full mr-2">
                            <img v-else src="~/assets/img/icon/defaultProfile.svg" alt="" class="w-8 h-8 mr-2">
                            <span class="font-medium mr-2 text-base">{{ chatroomInfo.member }}</span>
                            <span class="text-xs text-zinc-400">{{ formattedDate(item.created_at) }}</span>
    
                        </div>
                        <div class="bg-purple-50 max-w-60 break-words mt-2 px-3 py-2 rounded-md text-sm font-medium">{{ item.message }}</div>
                    </div>
                    <div v-else 
                    class="flex flex-col items-end ">
                        <div class="flex flex-row items-center">
                            <!-- <img src="~/assets/img/icon/defaultProfile.svg" alt="" class="w-8 mr-2"> -->
                            <span class="text-xs mr-2 text-zinc-400">{{ formattedDate(item.created_at) }}</span>
                            <span class="font-medium  text-base">You</span>
    
                        </div>
                        <div class="bg-blue-50 max-w-60 break-words mt-2 px-3 py-2 rounded-md text-sm font-medium">{{ item.message }}</div>
                    </div>
    
                </div>
                
            </div>
            
<!--             
            <div class="w-full text-sm h-10 mt-4 flex">
                <input v-model="message" type="text" placeholder="Type a message..."
                    class="flex-shrink border w-full  border-gray-300 p-2 rounded-s-md outline-none" />
                <button @click="sendMessage" class=" bg-stone-900 text-white font-medium py-2 px-4 rounded-e-md">
                    Send
                </button>
            </div>             -->
        </div>
    <!-- 
    <div class="mt-4">
        <div v-for="msg in messages" :key="msg" class="p-2">
        {{ msg }}
        </div>
    </div> -->
    </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import { io } from 'socket.io-client';
const props = defineProps({
    chatroomInfo : { type : Object }
});
const {data} = useAuth();
const user = data.value.user.rows[0]

const chatStore = useChatStore();
const messages = computed(() => {
    return chatStore.$state.chatrooms[props.chatroomInfo.id]?.messages;
});
// const socket = io('http://localhost:3001');
// const message = ref('');
// const messages = ref([]);

// const sendMessage = () => {
// if (message.value.trim()) {
//     socket.emit('message', message.value);
//     message.value = ''; // 입력 필드 초기화
// }
// };

// // 서버로부터 메시지 받기
// socket.on('message', (msg) => {
// messages.value.push(msg);
// });

const chatroomName = 'helly'

</script>
<style scoped>
.scroll::-webkit-scrollbar {
  display: none;
}
</style>
  