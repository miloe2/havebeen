import { defineEventHandler, getQuery } from 'h3';
import type { RowDataPacket, FieldPacket } from 'mysql2';
import { connectToDatabase } from '~/server/index'; 

export default defineEventHandler(async (event) => {
    const query = getQuery(event);
    const chatroom_id = query.chatroom_id;
    const cursor = query.cursor;
    const LIMIT = 20;
    
    let sql;
    let params;
    
    // 커서 값이 제공되지 않았거나 0으로 설정된 경우
    if (cursor === "0") {
        sql = `
        SELECT * FROM t_chat_messages 
        WHERE chatroom_id = ? 
        ORDER BY id DESC LIMIT ?`;
        params = [chatroom_id, LIMIT];
    } else {
        // 커서 값이 제공된 경우
        sql = `
        SELECT * FROM t_chat_messages 
        WHERE chatroom_id = ? AND 
        id < ? 
        ORDER BY id DESC LIMIT ?`;
        params = [chatroom_id, cursor, LIMIT];
    }
    
    const pool = await connectToDatabase();
    try {
        const [result] = await pool.query(sql, params) as [RowDataPacket[], FieldPacket[]];
        const reversedResult = result.reverse() ; // 클라이언트에 최신 순으로 반환
        return reversedResult;
    } catch (error) {
        console.error('Query error:', error);
        return { error: 'Failed to fetch messages' };
    }
    
});

