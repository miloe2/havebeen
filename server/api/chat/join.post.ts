import { defineEventHandler, getQuery } from 'h3';
import type { ResultSetHeader } from 'mysql2';
import { connectToDatabase } from '~/server/index'; 

export default defineEventHandler(async (event) => {
    const query = getQuery(event);
    const host = query.user_id
    const opponent = query.opponent_id;
    const createChatroomSql = `INSERT INTO t_chatrooms (room_name) values ('new chatroom') `;
    const memberJoinSql = `INSERT INTO t_chatroom_members (chatroom_id, user_id) values (?, ?)`;

    const pool = await connectToDatabase();
    try {
        const [chatroomResult] = await pool.execute<ResultSetHeader>(createChatroomSql);
        const chatroomId = chatroomResult.insertId;
        const [hostResult] = await pool.execute(memberJoinSql, [chatroomId, host]);
        const [opponentResult] = await pool.execute(memberJoinSql, [chatroomId, opponent]);

        return { success : true, chatroomId, meesage : {hostResult, opponentResult} }
    } catch (error) {
        console.error('Query error:', error);
        // 에러 처리...
    }
    
});