// server/api/hello.ts
// import { connectToDatabase } from './db'// 'db.ts' 파일의 경로에 따라 수정해야 할 수 있습니다.
import axios from 'axios';
import type { DataItme, FieldMapping } from '~/types/dataTypes';
import { connectToDatabase } from './db';
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

// 데이터의 필드명을 한글에서 영문으로 변경하는 함수
function convertFieldNames(data : DataItme[]) :DataItme[] {
    return data.map(item => {
        const newItem: { [key: string]: string } = {};
        Object.keys(item).forEach(key => {
        const newKey = fieldMapping[key] || key; // 매핑된 영문 필드명, 매핑이 없으면 원래 키 사용
        newItem[newKey] = item[key];
            });
        return newItem;
    });
}

export default defineEventHandler(async (event) => {
  try {
    const res = await axios.get(`${kotraURL}?serviceKey=${SERVICE_KEY}`, {
      params : {
        page : 9,
      }
    });
    // console.log('데이터 보여주세요 ' , res.data.data)
    const convertedData = convertFieldNames(res.data.data);
    console.log('conver', convertedData)
    // const db = await connectToDatabase();
    // const collection = db.collection('kotraExhibitions');
    // const result = await collection.insertMany(convertedData);
    // console.log(`${result.insertedCount}개의 문서가 삽입되었습니다.`);

    // // // 성공적으로 저장된 후 클라이언트에 응답 보내기
    // return { success: true, insertedCount: result.insertedCount };
    
  } catch(error) {
    console.log(error)
  }
  
  // // 데이터베이스에 연결
  // const db = await connectToDatabase();

  // // 'posts' 컬렉션에서 모든 문서를 조회
  // const posts = await db.collection('post').find().toArray();

  // // 조회한 문서들을 JSON 형태로 반환
  // return posts;
});