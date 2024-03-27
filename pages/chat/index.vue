<template>
    <!-- <div class="w-full h-full bg-zinc-50 -mt-20 pt-20"> -->
    <div class="xl:w-[1024px] w-full  mx-auto  mb-40">
        <div class="text-3xl font-bold montserrat mb-10">Chat</div>
            <div class="w-full grid grid-cols-3">
                <div class="col-span-1">
                    <ChatList/>
                </div>
                <div class="col-span-2">
                    <ChatRoom/>
                </div>
            </div>
        </div>
    <!-- </div> -->
</template>
<script setup>
import ChatList from '../../components/chat/ChatList.vue';
import ChatRoom from '../../components/chat/ChatRoom.vue';
</script>
<style >
    
</style>