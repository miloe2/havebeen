import type { RowDataPacket } from 'mysql2';
import { connectToDatabase } from '~/server/index';

export default defineEventHandler(async (event) => {
    // const query = getQuery(event);
    const {user_id, user_pwd} = getQuery(event)
    const pool = await connectToDatabase();
    try {
        // 타입 단언을 사용하지 않고 mysql2/promise의 결과를 처리
        const [result] = await pool.query(
            `SELECT * FROM t_users WHERE user_id = ?`, [user_id]
        );
        if(Array.isArray(result)){
            const rows = result as RowDataPacket[];
            if(rows.length > 0) {
                const user = rows[0];
                const match = user_pwd === user.user_pwd;
                if(match){
                    return { status : true , message : '로그인 성공'}
                } else {
                    return {status : false, message : '로그인 실패'}
                }
            } else {
                return {status :false, message : '사용자가 없습니다.'}
            }
        } 
    } catch (error) {
        console.error('Query error:', error);
        return { status: false, message: '쿼리 실행 실패' };
    }
});
