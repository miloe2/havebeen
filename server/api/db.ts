import { defineEventHandler } from 'h3';
import { connectToDatabase } from '../index'; 

export default defineEventHandler(async (event) => {
    const pool = await connectToDatabase();
    try {
        // 비동기 작업을 await 키워드를 사용하여 처리
        const [rows] = await pool.query('SELECT * FROM t_exhibitions');
        console.log(rows); // 서버 측 로그에 결과 출력
        // 결과를 직접 반환
        return rows;
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
