import { defineEventHandler, getQuery } from 'h3';
import { connectToDatabase } from '~/server/index'; 

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    console.log(body)
    const user_id = body.user_id
    const chatroom_id = body.chatroom_id;
    const message = body.message
    console.log(user_id, chatroom_id, message);
    const sendMessageSql = `INSERT INTO t_chat_messages (chatroom_id, user_id, message) values (?, ?, ?)`
    const pool = await connectToDatabase();
    try {
        await pool.execute(sendMessageSql, [chatroom_id, user_id, message]);
        return { success: true, chatroom_id, user_id, message };
    } catch (error) {
        console.error('Insert error:', error);
        // 클라이언트에 에러 응답 반환
        return { success: false, error: message };
    }
    
});