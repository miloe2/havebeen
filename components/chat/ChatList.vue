<template >
    <div class="w-full bg-stone-100 min-h-160 flex  justify-center p-6">
        <div class="w-full h-140 bg-white rounded-md  px-4">
            <div class="w-full bg-blue-00 mt-6 mb-4">
                <input type="text" class="bg-stone-100 rounded-sm  w-full h-8  outline-none text-xs placeholder:text-xs pl-2"
                placeholder="아이디를 검색해주세요">
            </div>
            <div class="w-full py-4 flex my-2" v-for="(item, index) in props.chatList" :key="index">
                <div class="w-11 h-11">
                    <img v-if="item.member_images" :src="item.member_images" alt="" class="w-full h-full object-cover rounded-full">
                    <img v-else src="~/assets/img/icon/defaultProfile.svg" alt="">
                </div>
                <div class="ml-4 font-medium flex flex-col w-9/12">
                    <div class="w-full  flex justify-between items-center"> 
                       <span >{{ item.members }}</span> 
                       <span class="font-normal text-xs text-stone-400 ">{{ formattedDate(new Date(item.created_at)) }}</span> 
                    </div>
                    <!-- <div class="font-normal text-sm w-full truncate">{{ item.message }}</div> -->
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { formattedDate } from '#imports';
const props = defineProps({
    chatList : { type : Array }
})
const result =
[ 
    {
        id : 0,
        img : 'img',
        name : 'helly',
        message : 'heyheyheyheyheyheyheyheyheyheyhey',
        sent_at : new Date(),

    },
    {
        id : 1,
        img : 'img',
        name : 'helly',
        message : 'heyheyheyheyheyheyheyheyheyheyhey',
        sent_at : new Date(),

    },
    {
        id : 2,
        img : 'img',
        name : 'helly',
        message : 'heyheyheyheyheyheyheyheyheyheyhey',
        sent_at : new Date(),

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

</script>
<style >
    
</style>