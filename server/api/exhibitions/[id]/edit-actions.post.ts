import { defineEventHandler, getQuery } from 'h3';
import type { FieldPacket, RowDataPacket } from 'mysql2';
import { connectToDatabase } from '~/server/index'; 
const booleanType = (value :boolean) => value === true  ? 1 : 0
export default defineEventHandler(async (event) => {
    
    const query =  getQuery(event);
    const exhibition_id = getRouterParam(event, 'id');
    const user_id = query.user_id;
    const action_type = query.action_type;
    const action_value = query.action_value;
    console.log(user_id, exhibition_id, action_type, action_value)
    const sql = `INSERT INTO t_user_actions (user_id, exhibition_id, action_type, action_value) VALUES (?, ?, ?, ?) ON DUPLICATE KEY UPDATE action_value = ?`;
    const pool = await connectToDatabase();
    try {
        console.log(sql)
        // 비동기 작업을 await 키워드를 사용하여 처리
        // const [rows] = await pool.query(sql, [id]) as RawDataPacket[][];
        const [result] = await pool.query(sql, [user_id, exhibition_id, action_type, action_value, action_value]) as [RowDataPacket[], FieldPacket[]];

        return { success : true, message : 'success', result}
    } catch (error) {
        console.error('Query error:', error);
        // 에러 발생 시 클라이언트에게 에러 메시지 반환
        return { error: 'Failed to fetch tables' };
    }
});
