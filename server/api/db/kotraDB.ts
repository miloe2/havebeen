// // kotra 에서 DB가져오기
import axios from 'axios';
import type { DataItem } from '~/types/dataTypes';
import { connectToDatabase } from '~/server/index'; 

const kotraURL ='https://api.odcloud.kr/api/15003367/v1/uddi:9aae9c56-1d56-4816-b2cf-91cc05e71e47';
const SERVICE_KEY = process.env.KOTRA_KEY;

// 한글 필드명과 대응하는 영문 필드명 매핑
const fieldMapping : { [key: string]: string } = {
    '개최국가': 'country',
    '개최기간': 'date',
    '개최도시': 'city',
    '개최장소': 'venue',
    '개최주기': 'frequency',
    '시장': 'marketType',
    '전시약명': 'shortName',
    '전시영문명': 'englishName',
    '전시회': 'eventName',
    '전시회유형': 'eventType',
    '주최사명': 'organizer',
    '주최사홈페이지': 'organizerWebsite',
    '품목(대분류)': 'category'
};

// 데이터의 필드명을 한글에서 영문으로 변경하고, 날짜를 변환하는 함수
function convertFieldNames(data : any[]) : DataItem[] {
    return data.map(item => {
        const newItem: any = {};
        Object.keys(item).forEach(key => {
            const newKey = fieldMapping[key] || key; // 매핑된 영문 필드명, 매핑이 없으면 원래 키 사용
            newItem[newKey] = item[key];
        });
        
        // 날짜 필드 처리
        if(newItem.date) {
            const year = "2024"; // 고정된 년도
            const [start, finish] = newItem.date.split('-');
            newItem.startDate = new Date(`${year}-${start.slice(0, 2)}-${start.slice(2)}`);
            newItem.finishDate = new Date(`${year}-${finish.slice(0, 2)}-${finish.slice(2)}`);
            delete newItem.date; // 원래 날짜 필드 삭제
        }

        return newItem;
    }); 
}

export default defineEventHandler(async (event) => {
        try {
            const res = await axios.get(`${kotraURL}?serviceKey=${SERVICE_KEY}`, {
            params: {
                page: 1,
            },
            });
        
            const convertedData = convertFieldNames(res.data.data);
            console.log('convert', convertedData);
        
            const pool = await connectToDatabase();

        
            // 삽입 쿼리 생성 및 실행
            for (const item of convertedData) {
            const placeholders = Object.keys(item).map(() => '?').join(', ');
            console.log(placeholders)
            const sql = `INSERT INTO t_exhibitions (${Object.keys(item).join(', ')}) VALUES (${placeholders})`;
            // console.log(sql)
            // await pool.query(sql, Object.values(item));
            }
        
            console.log(`${convertedData.length}개의 문서가 삽입되었습니다.`);
        
            // 성공적으로 저장된 후 클라이언트에 응답 보내기
            return { success: true, insertedCount: convertedData.length };
        } catch (error) {
            console.log(error);
            return { success: false};
        }
});

// import { connectToDatabase } from '~/server/api/db';
// import { defineEventHandler } from 'h3';

// //DB에 Date string을 Date타입으로 바꿈
// export default defineEventHandler(async (event) => {
//   try {
//     const db = await connectToDatabase();
//     const exhibitions = await db.collection('kotraExhibitions')
//                                 .find()
//                                 .toArray();

//     // 각 문서에 대해 date 필드를 변환하고, startDate 및 finishDate 추가
//     const updates = exhibitions.map(async (item) => {
//       const year = "2024"; // 년도는 고정
//       const [start, finish] = item.date.split('-');

//       // 날짜 변환
//       const startDate = new Date(`${year}-${start.slice(0, 2)}-${start.slice(2)}`);
//       const finishDate = new Date(`${year}-${finish.slice(0, 2)}-${finish.slice(2)}`);

//       // MongoDB 문서 업데이트
//       await db.collection('kotraExhibitions').updateOne(
//         { _id: item._id }, // 문서를 고유하게 식별하는 _id 사용
//         {
//           $set: { startDate, finishDate }, // startDate와 finishDate 추가
//           $unset: { date: "" } // 기존 date 필드 제거
//         }
//       );
//     });

//     // 모든 업데이트 작업이 완료될 때까지 대기
//     await Promise.all(updates);

//     console.log('모든 문서가 업데이트 되었습니다.');
//   } catch (error) {
//     console.error('문서 업데이트 중 오류 발생:', error);
//     throw error; // 에러를 던져 상위 핸들러에서 처리할 수 있도록 함
//   }
// });
