import { createServer } from "http";
import { Server } from "socket.io";

const httpServer = createServer();
const io = new Server(httpServer, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});
io.on("connection", (socket) => {
    console.log(`User connected: ${socket.id}`);

    socket.on("disconnect", () => {
        console.log(`User disconnected: ${socket.id}`);
    });

    socket.on("join_chatroom", async (chatroom_id) => {
        console.log(`Before joining, rooms: ${Array.from(socket.rooms)}`);
        await socket.join(chatroom_id);
        console.log(`After joining, rooms: ${Array.from(socket.rooms)}`);
    
        // 다른 클라이언트들에게 메시지 전송
        socket.to(chatroom_id).emit('message', `Welcome to ${chatroom_id}`);
    });
    
    
    socket.on('message', async (data) => {
        const { chatroom_id, message, user_id } = data;
        console.log(`Message from ${user_id} in chatroom ${chatroom_id}: ${message}`);

        io.to(chatroom_id).emit("a new user has joined the room"); 
        // 메시지를 해당 채팅방의 다른 클라이언트들에게 전달
        // io.to(chatroom_id).emit('message', data);
        socket.emit('message', data);
        // socket.to(chatroom_id).emit('message', data)
      });
    // // 클라이언트로부터 메시지 받기
    // socket.on("message", async (data) => {
    //     console.log(' 26에서 메시지 보냄 message')
    //     const { chatroom_id, message, user_id } = data;
    //     // // 받은 메시지를 모든 클라이언트에게 전송
    //     io.to(chatroom_id).emit("receive_message", { message, user_id });
    //     // socket.to(chatroom_id).emit('hello');
    //     io.emit("message", data);

    //     // socket.to(chatroom_id).emit("receive_message", { message, user_id });
    // });

    socket.on("receive_message", (data) => {
        console.log('받음')
        const { message, user_id } = data;
        // 받은 메시지를 화면에 표시하거나 다른 처리를 수행
        console.log(`Received message from ${user_id}: ${message}`);
        // 예: newMessages.value.push({ content: message, user_id });
    });
});

const port = 3001; // Nuxt 서버와 다른 포트를 사용합니다.
httpServer.listen(port, () => {
  console.log(`Socket.io server listening on port ${port}`);
});
