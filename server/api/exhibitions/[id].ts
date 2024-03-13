import { defineEventHandler, getQuery } from 'h3';
import type { FieldPacket, RowDataPacket } from 'mysql2';
import { connectToDatabase } from '~/server/index'; 

export default defineEventHandler(async (event) => {
    console.log('start')
    const id = getRouterParam(event, 'id')
    const sql = `SELECT * FROM t_exhibitions
    WHERE ID = ? `
    const pool = await connectToDatabase();
    try {
        // 비동기 작업을 await 키워드를 사용하여 처리
        // const [rows] = await pool.query(sql, [id]) as RawDataPacket[][];
        const [rows] = await pool.query(sql, [id]) as [RowDataPacket[], FieldPacket[]];

        // console.log(rows); // 서버 측 로그에 결과 출력
        // 결과를 직접 반환
        // if (rows.length > 0) {
        //     return rows[0]; // 첫 번째 요소만 반환
        // } else {
        //     // 해당 ID를 가진 데이터가 없는 경우
        //     return { error: 'Exhibition not found' };
        // }
        return rows[0]
    } catch (error) {
        console.error('Query error:', error);
        // 에러 발생 시 클라이언트에게 에러 메시지 반환
        return { error: 'Failed to fetch tables' };
    }
});
