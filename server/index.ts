import mysql, { type Pool } from 'mysql2/promise';
// 예: "mysql://user:password@localhost:3306/database_name"
// 서버만 연결하는 코드 
const MYSQL_URI = process.env.MYSQL_URI as string; 
let pool : Pool;

export const connectToDatabase = async () => {
    console.log('start')
    if (pool) return pool;

    pool = mysql.createPool(MYSQL_URI);
    return pool;
};

// const app = express();
// const port = process.env.PORT || 3001;
// const password = process.env.MYSQLP;

// // MySQL 연결 설정
// const pool = mysql.createPool({
//   host: 'localhost',
//   user: 'root',
//   password: password,
//   database: 'exhibitions'
// });

// // Simple API 예시
// app.get('/api', (req, res) => {
//     console.log('start')
//     console.log(password)
//   pool.query('SELECT * FROM exhibitions', (err, results) => {
//     if (err) throw err;
//     res.json(results);
//   });
// });

// app.listen(port, () => {
//   console.log(`Server listening on port ${port}`);
// });
