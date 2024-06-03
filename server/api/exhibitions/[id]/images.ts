import { defineEventHandler, getQuery } from 'h3';
import type { FieldPacket, RowDataPacket } from 'mysql2';
import { connectToDatabase } from '~/server/index'; 

export default defineEventHandler(async (event) => {
    const id = getRouterParam(event, 'id')
    const sql = `SELECT image_url FROM t_exhibition_image
    WHERE exhibition_id = ? `
    const pool = await connectToDatabase();
    try {
        // 비동기 작업을 await 키워드를 사용하여 처리
        // const [rows] = await pool.query(sql, [id]) as RawDataPacket[][];
        const [rows] = await pool.query(sql, [id]) as [RowDataPacket[], FieldPacket[]];
        const imageUrls = rows.map(row => row.image_url);
        return imageUrls;
    } catch (error) {
        console.error('Query error:', error);
        // 에러 발생 시 클라이언트에게 에러 메시지 반환
        return { error: 'Failed to fetch tables' };
    }
});
