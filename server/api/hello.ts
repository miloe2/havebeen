// server/api/hello.ts
// import { connectToDatabase } from './db'// 'db.ts' 파일의 경로에 따라 수정해야 할 수 있습니다.
import axios from 'axios'
const kotraURL ='https://api.odcloud.kr/api/15003367/v1/uddi:9aae9c56-1d56-4816-b2cf-91cc05e71e47'
const SERVICE_KEY = process.env.KOTRA_KEY
export default defineEventHandler(async (event) => {

  try {
    const res = await axios.get(`${kotraURL}?serviceKey=${SERVICE_KEY}`)
    console.log(res.data)
    return res.data
    
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