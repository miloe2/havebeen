import { connectToDatabase } from "~/server";
import { defineEventHandler } from 'h3';

export default defineEventHandler(async (event) => {
  try {
    const connection = await connectToDatabase();
    const [rows] = await connection.execute(
        `SELECT * , ABS(DATEDIFF(startDate, CURDATE())) AS closestDifference 
        FROM t_exhibitions 
        ORDER BY closestDifference ASC 
        LIMIT 4;`
    );
    await connection.end;
    return rows;
    
  } catch (error) {
    console.error('Error fetching closest exhibitions:', error);
    throw error;
  }
});
