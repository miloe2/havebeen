import { connectToDatabase } from '~/server/api/db';
import { defineEventHandler, getQuery } from 'h3';


//페이지네이션 호출
export default defineEventHandler(async (event) => {
    const query = getQuery(event);
    const page = parseInt(query.page as string) || 1;
    const limit = parseInt(query.limit as string) || 8;
    try {
        const db = await connectToDatabase();
        // .skip()과 .limit()을 사용하여 페이지네이션 구현
        const exhibitions = await db.collection('kotraExhibitions')
                                    .find()
                                    .skip((page - 1) * limit)
                                    .limit(limit)
                                    .toArray();
        return exhibitions;
    } catch(error) {
        console.log(error);
        // 에러 핸들링: 적절한 HTTP 상태 코드와 메시지 반환
        throw createError({
        statusCode: 500,
        statusMessage: 'Server Error',
        data: 'Failed to fetch exhibitions'
        });
    }
});
