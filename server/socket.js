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
  
    // 클라이언트로부터 메시지 받기
    socket.on("message", (msg) => {
      console.log(`Message from ${socket.id}: ${msg}`);
      // 받은 메시지를 모든 클라이언트에게 전송
      io.emit("message", msg);
    });
  });

const port = 3001; // Nuxt 서버와 다른 포트를 사용합니다.
httpServer.listen(port, () => {
  console.log(`Socket.io server listening on port ${port}`);
});
