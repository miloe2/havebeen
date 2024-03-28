<template>
    <div class="w-full bg-stone-100 min-h-160 flex  justify-center p-6 relative">
        <div class="w-full h-140 bg-white rounded-md  p-6  pb-10 ">
            <div class="flex mb-10">
                <img src="~/assets/img/icon/defaultProfile.svg" alt="" class="w-6 mr-2">
                <span class="font-medium">{{ chatroomName }}님과의 채팅</span>
            </div>
            <div class="w-full bg-blue-00 overflow-y-scroll h-100 scroll">
                <div class="flex flex-col" v-for="(item, index) in result" :key="index">
                    <div v-if="item.sender_name === chatroomName" 
                    class="flex flex-col">
                        <div class="flex flex-row items-center">
                            <img src="~/assets/img/icon/defaultProfile.svg" alt="" class="w-8 mr-2">
                            <span class="font-medium mr-2 text-base">{{ item.sender_name }}</span>
                            <span class="text-xs text-zinc-400">{{ formattedDate(item.sent_at) }}</span>
    
                        </div>
                        <div class="bg-purple-50 max-w-60 break-words mt-2 px-3 py-2 rounded-md text-sm font-medium">{{ item.message }}</div>
                    </div>
                    <div v-else 
                    class="flex flex-col items-end ">
                        <div class="flex flex-row items-center">
                            <!-- <img src="~/assets/img/icon/defaultProfile.svg" alt="" class="w-8 mr-2"> -->
                            <span class="text-xs mr-2 text-zinc-400">{{ formattedDate(item.sent_at) }}</span>
                            <span class="font-medium  text-base">You</span>
    
                        </div>
                        <div class="bg-blue-50 max-w-60 break-words mt-2 px-3 py-2 rounded-md text-sm font-medium">{{ item.message }}</div>
                    </div>
    
                </div>
                
            </div>
            
            
            <div class="w-full ring- h-10 mt-4 flex">
                <input v-model="message" type="text" placeholder="Type a message..." class="flex-shrink border w-full  border-gray-300 p-2" />
                <button @click="sendMessage" class=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
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
const chatroomName = 'helly'
const result = [
    {
        id : 0,
        sender_id : 2,
        sender_name : 'helly',
        message : 'heyheyheyheyheyheyheyheyheyheyheyheyhey',
        sent_at : new Date(),
        read_flag : 1,
    },
    {
        id : 1,
        sender_id : 1,
        sender_name : 'a',
        message : 'whhhhattttttt',
        sent_at : new Date(),
        read_flag : 1,
    },
    {
        id : 1,
        sender_id : 1,
        sender_name : 'a',
        message : 'whhhhattttttt',
        sent_at : new Date(),
        read_flag : 1,
    },
    {
        id : 1,
        sender_id : 1,
        sender_name : 'a',
        message : 'whhhhatttttatttttatttttatttttatttttatttttatttttattttttt',
        sent_at : new Date(),
        read_flag : 1,
    },
    {
        id : 1,
        sender_id : 1,
        sender_name : 'a',
        message : 'whhhhattttttt',
        sent_at : new Date(),
        read_flag : 1,
    },
    {
        id : 1,
        sender_id : 1,
        sender_name : 'a',
        message : 'whhhhattttttt',
        sent_at : new Date(),
        read_flag : 1,
    },
    {
        id : 1,
        sender_id : 1,
        sender_name : 'a',
        message : 'whhhhattttttt',
        sent_at : new Date(),
        read_flag : 1,
    },
    {
        id : 1,
        sender_id : 1,
        sender_name : 'a',
        message : 'whhhhattttttt',
        sent_at : new Date(),
        read_flag : 1,
    },
    {
        id : 1,
        sender_id : 1,
        sender_name : 'a',
        message : 'whhhhattttttt',
        sent_at : new Date(),
        read_flag : 1,
    },
        
]
// -- 메시지 테이블
// CREATE TABLE t_messages (
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     sender_id INT NOT NULL,
//     receiver_id INT NOT NULL,
//     message TEXT NOT NULL,
//     sent_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
//     read_flag INT NOT NULL DEFAULT 0,
//     FOREIGN KEY (sender_id) REFERENCES t_users(id),
//     FOREIGN KEY (receiver_id) REFERENCES t_users(id)
// );
// -- 채팅룸 
// CREATE TABLE t_chatrooms (
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     room_name VARCHAR(255) NOT NULL,
//     created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
//     -- 필요한 경우 추가적인 필드를 여기에 정의할 수 있습니다.
// );

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
</script>
<style scoped>
.scroll::-webkit-scrollbar {
  display: none;
}
</style>
  