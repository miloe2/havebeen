import { defineEventHandler, getQuery } from 'h3';
import type { FieldPacket, RowDataPacket } from 'mysql2';
import { connectToDatabase } from '~/server/index'; 

export default defineEventHandler(async (event) => {
    const query =  getQuery(event);
    const exhibition_id = getRouterParam(event, 'id');
    const user_id = query.user_id;
    const sql = `SELECT * FROM t_user_actions
    WHERE user_id = ? and exhibition_id = ? 
    `
    const pool = await connectToDatabase();
    try {
        // 비동기 작업을 await 키워드를 사용하여 처리
        // const [rows] = await pool.query(sql, [id]) as RawDataPacket[][];
        const [rows] = await pool.query(sql, [user_id, exhibition_id]) as [RowDataPacket[], FieldPacket[]];

        return rows
    } catch (error) {
        console.error('Query error:', error);
        // 에러 발생 시 클라이언트에게 에러 메시지 반환
        return { error: 'Failed to fetch tables' };
    }
});
