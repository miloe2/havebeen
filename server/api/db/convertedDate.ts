import { connectToDatabase } from '~/server/api/db';
import { defineEventHandler } from 'h3';

//DB에 Date string을 Date타입으로 바꿈
export default defineEventHandler(async (event) => {
  try {
    const db = await connectToDatabase();
    const exhibitions = await db.collection('kotraExhibitions')
                                .find()
                                .toArray();

    // 각 문서에 대해 date 필드를 변환하고, startDate 및 finishDate 추가
    const updates = exhibitions.map(async (item) => {
      const year = "2024"; // 년도는 고정
      const [start, finish] = item.date.split('-');

      // 날짜 변환
      const startDate = new Date(`${year}-${start.slice(0, 2)}-${start.slice(2)}`);
      const finishDate = new Date(`${year}-${finish.slice(0, 2)}-${finish.slice(2)}`);

      // MongoDB 문서 업데이트
      await db.collection('kotraExhibitions').updateOne(
        { _id: item._id }, // 문서를 고유하게 식별하는 _id 사용
        {
          $set: { startDate, finishDate }, // startDate와 finishDate 추가
          $unset: { date: "" } // 기존 date 필드 제거
        }
      );
    });

    // 모든 업데이트 작업이 완료될 때까지 대기
    await Promise.all(updates);

    console.log('모든 문서가 업데이트 되었습니다.');
  } catch (error) {
    console.error('문서 업데이트 중 오류 발생:', error);
    throw error; // 에러를 던져 상위 핸들러에서 처리할 수 있도록 함
  }
});
