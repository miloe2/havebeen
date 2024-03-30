<template>
    <div v-if="pending">
        로딩중
    </div>
    <!-- <div class="w-full h-full bg-zinc-50 -mt-20 pt-20"> -->
    <div v-else class="xl:w-[1024px] w-full  mx-auto overflow-hidden">
        <div class="text-3xl font-bold montserrat mb-4">Chat</div>
            <div class="w-full grid grid-cols-3">
                <div class="col-span-1">
                    <ChatList :chatList="chatList"/>
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
import { useAsyncData } from 'nuxt/app'

definePageMeta({
    middleware :'auth',
});

const { data: authData } = useAuth();
const user = computed(() => authData.value.user['rows'][0]);

const fetchChatList = async () => {
    if (!user.value || !user.value.id) {
        return Promise.resolve(null);
    }
    return $fetch('api/chat', { params: { user_id: user.value.id } });
};

const { data: chatList, pending, refresh } = useAsyncData(fetchChatList, { server: false });

watchEffect(() => {
    if (user.value && user.value.id) {
        refresh();
    }
});
</script>
<style >
    
</style>