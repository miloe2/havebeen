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
        console.log(data)
        socket.join(data)
    });
  
    socket.on('send_message', (data) => {
        console.log('send', data)
        socket.broadcast.emit('receive_message', data);
    });

    socket.on('receive_message', (data) => {
        console.log('receive', data);
      });
});

const port = 3001; // Nuxt 서버와 다른 포트를 사용합니다.
httpServer.listen(port, () => {
  console.log(`Socket.io server listening on port ${port}`);
});
