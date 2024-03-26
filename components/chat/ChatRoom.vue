<template>
    <div class="w-full bg-blue-50 p-4 min-h-100">
      Chat Room!!
      <input v-model="message" type="text" placeholder="Type a message..." class="border border-gray-300 p-2" />
      <button @click="sendMessage" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Send
      </button>
      <div class="mt-4">
        <div v-for="msg in messages" :key="msg" class="p-2">
          {{ msg }}
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { io } from 'socket.io-client';
  
  const socket = io('http://localhost:3001');
  const message = ref('');
  const messages = ref([]);
  
  const sendMessage = () => {
    if (message.value.trim()) {
      socket.emit('message', message.value);
      message.value = ''; // 입력 필드 초기화
    }
  };
  
  // 서버로부터 메시지 받기
  socket.on('message', (msg) => {
    messages.value.push(msg);
  });
  </script>
  