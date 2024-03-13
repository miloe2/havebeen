import { connectToDatabase } from "~/server";
import { defineEventHandler } from 'h3';

export default defineEventHandler(async (event) => {
   const query =  getQuery(event);
   const category = query.category;
//    console.log(category)
  try {
    const connection = await connectToDatabase();
    const sql = `SELECT * FROM t_exhibitions
    WHERE CATEGORY = ? `
    // console.log(sql)
    const [rows] = await connection.query( sql, category);
    // console.log([rows])
    // await connection.end();
    return rows;
    
  } catch (error) {
    console.error('Error category exhibitions:', error);
    throw error;
  }
});
