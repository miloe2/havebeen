import { defineEventHandler, getQuery } from 'h3';
import type { FieldPacket, RowDataPacket } from 'mysql2';
import { connectToDatabase } from '~/server/index'; 

export default defineEventHandler(async (event) => {
    const id = getRouterParam(event, 'id')
    const reviewData = await readBody(event);
    // console.log(id, reviewData)
    const pool = await connectToDatabase();
    try {
        const sql = `INSERT INTO t_reviews 
        (user_id, exhibitions_id, rate_stars, comment, visitor_type, tag, image_cnt, img1, img2, img3) 
        values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
        // null이 허용되는 필드에 대해 undefined 대신 null을 할당
        const params = [
            reviewData.user_id || null,
            id,
            reviewData.rate_stars || null,
            reviewData.comment || null,
            reviewData.visitor_type || null,
            reviewData.tag || null,
            reviewData.image_cnt || 0, // 예를 들어 이미지 개수는 0으로 기본값 설정
            reviewData.img1 || null,
            reviewData.img2 || null,
            reviewData.img3 || null,
        ];
        console.log(params)
        // await pool.execute(sql, params) as [RowDataPacket[], FieldPacket[]];

        return { success : true, message : '리뷰 전송 성공'}
    } catch (error) {
        console.error('Query error:', error);
        // 에러 발생 시 클라이언트에게 에러 메시지 반환
        return { error: 'Failed to fetch tables' };
    }
});
