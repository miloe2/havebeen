import type { RowDataPacket } from 'mysql2';
import { connectToDatabase } from '~/server/index';

export default defineEventHandler(async (event) => {
    // const query = getQuery(event);
    // console.log('start', getQuery(event))
    const body = await readBody(event);
    const { user_id, user_pwd } = body
    const sql = `SELECT * FROM t_users WHERE user_id = ?`
    const pool = await connectToDatabase();
    try {
        const [result] = await pool.execute(sql, [user_id]);
        if(Array.isArray(result)){
            const rows = result as RowDataPacket[];
            if(rows.length > 0) {
                const user = rows[0];
                const match = user_pwd === user.user_pwd;
                if(match){
                    return { status : true , name: user.user_name, message : '로그인 성공' }
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
