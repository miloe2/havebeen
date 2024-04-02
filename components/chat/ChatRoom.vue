<template>
    <div class="w-full bg-stone-100 min-h-160 flex items-center  justify-center p-6 relative">
        <button class="bg-red-500" @click="sendMsg">send</button>
      <div> test txt :  {{ testTxt }} </div>
        <div>newMessages {{ newMessages }}</div>
        <!-- {{ props.chatroomInfo }} -->
        <div class="w-full h-140 bg-white rounded-md  p-6  pb-10 "v-if="existingMessages">
            <div class="flex mb-10 ">
                <img v-if="chatroomInfo.image" :src="chatroomInfo.image" alt="" class="w-6 h-6 rounded-full mr-2">
                            <img v-else src="~/assets/img/icon/defaultProfile.svg" alt="" class="w-6 h-6 mr-2">
                <span class="font-medium">{{ chatroomInfo.member }}님과의 채팅</span>
            </div>
            <div class="w-full bg-blue-00 overflow-y-scroll h-100 scroll">

                <div class="flex flex-col" v-for="(item, index) in existingMessages" :key="index">
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

                {{ test }}
                <div class="bg-red-500" @click="sendTest">여기를 클릭해서 메세지 보내기</div>
                <div v-for="(item, index) in newMessages" :key="index">
                    {{ item }}
                </div>
                
            </div>
            
            
            <div class="w-full text-sm h-10 mt-4 flex">
                <input v-model="msg" type="text" placeholder="Type a message..."
                    class="flex-shrink border w-full  border-gray-300 p-2 rounded-s-md outline-none" @keypress.enter="sendMessage"/>
                <button @click="sendMessage" class=" bg-stone-900 text-white font-medium py-2 px-4 rounded-e-md">
                    Send
                </button>
            </div>            
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
const { data } = useAuth();
const user = data.value.user.rows[0];
const user_id = user.id

const chatStore = useChatStore();
const existingMessages = computed(() => {
    return chatStore.$state.chatrooms[props.chatroomInfo.id]?.messages;
});
const socket = io('http://localhost:3001');
const msg = ref('');
const newMessages = ref([]);
const test = ref('here');
const sendTest = () => {
    io.in(chatroom_id).clients()
};
const sendMsg = () => {
    console.log('socket.on send 시작', test.value);
    socket.emit('send_message', test.value  );
};
socket.on('receive_message', (message) => {
    newMessages.value.push(message);
    console.log('socket.on messgesg 받음', message)
});

const sendMessage = () => {
    const chatroom_id = props.chatroomInfo?.id;
    const content = msg.value;
    if (msg.value.trim()) {
        const tempId = Date.now(); // 임시 ID 생성
        // console.log(chatroom_id, content, user_id)
        // socket.emit("message", { message : content,});
        socket.emit("message", { chatroom_id, message : content, user_id });
        // newMessages.value.push({ tempId, content, user_id, chatroom_id }); // 화면에 즉시 표시
        msg.value = ''; // 입력 필드 초기화
    }
};
const testTxt =ref('');
// socket.on('message-broadcast', (data) => {
//     testTxt.value = data
//     console.log('서버로부터 메시지를 받았습니다:', data)
//     newMessages.value.push(data); // 화면에 즉시 표시
// });



// socket.emit('message', { msg : '메세지내용', room : '룸이름' }) 


</script>
<style scoped>
.scroll::-webkit-scrollbar {
  display: none;
}
</style>
  