import { io } from 'socket.io-client';

const socket = io('http://localhost:3001');
const message = ref
const messages = ref([]);

socket.emit('ask-join', )

// const sendMessage = () => {
// if (message.value.trim()) {
//     socket.emit('message', message.value);
//     message.value = ''; // 입력 필드 초기화
// }
// };

// 서버로부터 메시지 받기
// socket.on('message', (msg) => {
// messages.value.push(msg);
// });