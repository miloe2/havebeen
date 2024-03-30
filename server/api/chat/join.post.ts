import { defineEventHandler, getQuery } from 'h3';
import type { ResultSetHeader } from 'mysql2';
import { connectToDatabase } from '~/server/index'; 
import type { FieldPacket, RowDataPacket } from 'mysql2';

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    console.log(body.user_id)
    const host = body.user_id
    const opponent = body.opponent_id;
    console.log(host, opponent)
    const createChatroomSql = `INSERT INTO t_chatrooms (room_name) values ('new chatroom') `;
    const memberJoinSql = `INSERT INTO t_chatroom_members (chatroom_id, user_id) values (?, ?)`;
    const searchChatroomSql = `
        SELECT chatroom_id FROM t_chatroom_members
        WHERE user_id IN (?, ?)
        GROUP BY chatroom_id
        HAVING COUNT(DISTINCT user_id) = 2;
    `;
    const pool = await connectToDatabase();
    try {
          // 채팅방 검색 쿼리 실행
          const [existingRooms] = await pool.query(searchChatroomSql, [host, opponent]) as [RowDataPacket[], FieldPacket[]];
          let chatroom_id;
  
          if (existingRooms.length > 0) {
              // 이미 존재하는 채팅방이 있으면 해당 채팅방 ID 사용
              chatroom_id = existingRooms[0].chatroom_id;
          } else {
            const [chatroomResult] = await pool.execute<ResultSetHeader>(createChatroomSql);
            chatroom_id = chatroomResult.insertId;
            await pool.execute(memberJoinSql, [chatroom_id, host]);
            await pool.execute(memberJoinSql, [chatroom_id, opponent]);
          }
        return { success : true, chatroom_id : chatroom_id} 
    } catch (error) {
        console.error('Query error:', error);
        // 에러 처리...
    }
});