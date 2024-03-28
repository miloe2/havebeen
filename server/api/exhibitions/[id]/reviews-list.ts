import { defineEventHandler, getQuery } from 'h3';
import type { FieldPacket, RowDataPacket } from 'mysql2';
import { connectToDatabase } from '~/server/index'; 

export default defineEventHandler(async (event) => {
    const id = getRouterParam(event, 'id')
    const sql =`SELECT t_reviews.*, t_users.user_name, t_users.user_img
    FROM t_reviews JOIN t_users ON t_users.id = t_reviews.user_id
    WHERE t_reviews.exhibition_id = ?`
    const pool = await connectToDatabase();
    try {
        const [rows] = await pool.query(sql, [id]) as [RowDataPacket[], FieldPacket[]];
        return rows
    } catch (error) {
        console.error('Query error:', error);
        return { error: 'Failed to fetch tables' };
    }
});
