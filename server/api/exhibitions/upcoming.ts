import { connectToDatabase } from '~/server/api/db';
import { defineEventHandler } from 'h3';

export default defineEventHandler(async (event) => {
  try {
    const db = await connectToDatabase();
    
    // 현재 날짜를 기준으로 설정
    const now = new Date();
    
    // Aggregation pipeline을 사용하여 문서를 처리
    const closestExhibitions = await db.collection('kotraExhibitions').aggregate([
      {
        // 현재 날짜와의 차이 계산 (절대값)
        $addFields: {
          closestDifference: {
            $abs: {
              $subtract: ["$startDate", now]
            }
          }
        }
      },
      {
        // 계산된 차이에 따라 정렬 (가장 가까운 날짜부터)
        $sort: { closestDifference: 1 }
      },
      {
        // 상위 4개 문서만 선택
        $limit: 4
      }
    ]).toArray();

    console.log(closestExhibitions);
    return closestExhibitions;
  } catch (error) {
    console.error('Error fetching closest exhibitions:', error);
    throw error;
  }
});
