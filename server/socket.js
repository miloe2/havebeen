import { createServer } from "http";
import { Server } from "socket.io";

const httpServer = createServer();
const io = new Server(httpServer, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});
io.on('connection', (socket) => {
    console.log(`User Connected: ${socket.id}`);

    socket.on('ask-join', (data) => {
        console.log(data) // 17
        socket.join(data)
        console.log('joinn', socket.rooms) //  joinn Set(2) { 'gGkVoe8AFnnluLGiAAAu', 17 };
        socket.to(data).emit('receive_message', {
            message: 'WELCOME',
            sender: 'System',
            timestamp: new Date().toISOString()
        });
        
    });
  
    socket.on('send_message', async (data) => {
        console.log(data)
        console.log(data.chatroom_id);
        const { chatroom_id } = data
        // console.log('send', socket.rooms)
        // console.log('send_message chatroom_id check', data.chatroom_id) // send_message chatroom_id check 17
        // socket.broadcast.emit('receive_message', data);
        socket.to(chatroom_id).emit('receive_message', data);
        // io.to(17).emit('receive_message', data);
        // io.sockets.in(17).emit('receive_message', data); // 안됨
        // io.sockets.emit('receive_message', data); // 성공
        // socket.to(data.chatroom_id).emit('receive_message', data);
        // socket.to(17).emit('receive_message', data);
        console.log('send_message', socket.rooms) //send Set(1) { 'tDXyiplzRpXEGBt0AAAz' }

    });

    // socket.on('receive_message', async (data) => {
    //     io.to(data.chatroom_id).emit('receive_message', data);
    //     // socket.to(data.chatroom_id).emit('receive_message', data);

    //     // console.log('receive', data);
    //     console.log('receive', socket.rooms)

    // });
});

const port = 3001; // Nuxt 서버와 다른 포트를 사용합니다.
httpServer.listen(port, () => {
  console.log(`Socket.io server listening on port ${port}`);
});
