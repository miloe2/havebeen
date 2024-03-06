import { connectToDatabase } from '../index';

export default defineEventHandler(async (event) => {
    const pool = await connectToDatabase();
  
    try {
      pool.query('SELECT * from t_exhibitions', (error, rows, fields) => {
        if (error) throw error;
        console.log('User info is: ', rows);
      });
      // // 'query'의 반환 값을 구조 분해 할당을 통해 처리
      // const [rows] = await pool.query("SHOW TABLES");
  
      // // 이제 'rows'는 반복할 필요가 없는, 쿼리 결과 배열입니다.
      // // 로그 출력이나 클라이언트로의 응답 등에 사용할 수 있습니다.
      // console.log(rows);
  
      // // 예를 들어, 클라이언트에게 조회된 테이블 목록을 JSON 형태로 반환
      // return rows;
    } catch (error) {
      console.error('Query error:', error);
      // 에러 발생 시 클라이언트에게 에러 메시지 반환
      return { error: 'Failed to fetch tables' };
    }
  });
  
  
// import { Db, MongoClient } from "mongodb";

// let cachedDb: Db;
// let client: MongoClient;
// const MONGODB_URI = process.env.MONGO_URI as string;
// console.log(MONGODB_URI)
// const DB_NAME = 'forum'

// export const connectToDatabase = async () => {
//     console.log('DB connect start');
    
//     if (cachedDb) {
//         console.log("Existing cached connection found!");
//         return cachedDb;
//     }
//     console.log("Aquiring new DB connection....");
//     try {
//         // Connect to our MongoDB database hosted on MongoDB Atlas

//         client = await MongoClient.connect(MONGODB_URI);

//         // Specify which database we want to use
//         const db = await client.db(DB_NAME);
//         // const collections = await db.collections();
//         // const collectionNames = collections.map((col) => col.collectionName);
//         // console.log('Collections:', collectionNames); // 컬렉션 이름을 출력합니다.

//         cachedDb = db;
//         return db;
//     } catch (error) {
//         console.log("ERROR aquiring DB Connection!");
//         console.log(error);
//         throw error;
//     }
// };


// // // server/db/mongo.js
// // import { MongoClient } from 'mongodb';


// // // MongoDB URI
// // const client = new MongoClient(url);

// // async function connectToDatabase() {
// //   if (!client.isConnected()) await client.connect();
// //   const db = client.db('forum');
// //   return db;
// // }

// // export { connectToDatabase };
