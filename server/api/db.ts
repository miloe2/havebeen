import { Db, MongoClient } from "mongodb";

let cachedDb: Db;
let client: MongoClient;
const MONGODB_URI = process.env.MONGO_URI as string;
console.log(MONGODB_URI)
const DB_NAME = 'forum'

export const connectToDatabase = async () => {
    console.log('DB connect start');
    
    if (cachedDb) {
        console.log("Existing cached connection found!");
        return cachedDb;
    }
    console.log("Aquiring new DB connection....");
    try {
        // Connect to our MongoDB database hosted on MongoDB Atlas

        client = await MongoClient.connect(MONGODB_URI);

        // Specify which database we want to use
        const db = await client.db(DB_NAME);
        // const collections = await db.collections();
        // const collectionNames = collections.map((col) => col.collectionName);
        // console.log('Collections:', collectionNames); // 컬렉션 이름을 출력합니다.

        cachedDb = db;
        return db;
    } catch (error) {
        console.log("ERROR aquiring DB Connection!");
        console.log(error);
        throw error;
    }
};


// // server/db/mongo.js
// import { MongoClient } from 'mongodb';


// // MongoDB URI
// const client = new MongoClient(url);

// async function connectToDatabase() {
//   if (!client.isConnected()) await client.connect();
//   const db = client.db('forum');
//   return db;
// }

// export { connectToDatabase };
