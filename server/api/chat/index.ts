import { defineEventHandler, getQuery } from 'h3';
import { connectToDatabase } from '~/server/index'; 

export default defineEventHandler(async (event) => {
    const query = getQuery(event);
    const user_id = query.user_id;
    const sql = 
    `SELECT 
        cr.id AS chatroom_id,
        cr.room_name,
        cr.created_at,
        GROUP_CONCAT(DISTINCT u.user_name ORDER BY u.user_name SEPARATOR ', ') AS members,
        GROUP_CONCAT(DISTINCT u.user_img ORDER BY u.user_name SEPARATOR ', ') AS member_images
    FROM 
        t_chatrooms AS cr
    JOIN 
        t_chatroom_members AS cm ON cr.id = cm.chatroom_id
    JOIN 
        t_users AS u ON cm.user_id = u.id
    WHERE 
        cr.id IN (SELECT chatroom_id FROM t_chatroom_members WHERE user_id = ?)
        AND u.id != ?
    GROUP BY 
        cr.id;
    `;
    const latestMsgSQL = `
    SELECT 
        tcm.chatroom_id,
        tcm.message, 
        tcm.created_at 
    FROM 
        t_chat_messages tcm 
    INNER JOIN (
        SELECT 
            chatroom_id,  
            MAX(created_at) AS latest 
        FROM 
            t_chat_messages
        GROUP BY 
            chatroom_id 
    ) AS latest_msg ON tcm.chatroom_id = latest_msg.chatroom_id AND tcm.created_at = latest_msg.latest 
    ORDER BY 
        tcm.chatroom_id;
    `;
    const pool = await connectToDatabase();
    try {
        // 비동기 작업을 await 키워드를 사용하여 처리
        const [chatroom] = await pool.query(sql, [user_id, user_id]);
        const [latestMsg] = await pool.execute(latestMsgSQL);
        return { chatroom , latestMsg,} 
    } catch (error) {
        console.error('Query error:', error);
        // 에러 발생 시 클라이언트에게 에러 메시지 반환
        return { error: 'Failed to fetch tables' };
    }
});

