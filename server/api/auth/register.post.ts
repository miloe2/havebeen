import { connectToDatabase } from '~/server';
import bcrypt from 'bcrypt';
export default defineEventHandler(async (event) => {

    const body = await readBody(event);
    if(!body.email || !body.name || !body.password){
        throw createError({
            statusCode: 400,
            statusMessage : 'Bad Request',
            message : 'Missing Request fields'
        })
    }
    const connection = await connectToDatabase();

    try {
        const sql = `INSERT INTO t_users (user_id, user_name, user_pwd) values (?, ?, ?)`;
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(body.password, salt);
        // params를 배열로 수정
        const params = [body.email, body.name, hashedPassword];
        const [result] = await connection.execute(sql, params);
    
        return { success: true, message: '사용자 등록 성공' };
    } catch (error) {
        console.log(error);
        return { success: false, message: '사용자 등록 실패', error };
    }
    
})