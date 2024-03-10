export default defineEventHandler(async (event) => {
    console.log('New request: ' + getRequestURL(event))
    // connectToDatabase();
})
  // // // // server/middleware/connect-db.ts
// // // // import { defineNuxtMiddleware } from 'app';
// // // import { connectToDatabase } from '~/server/db/mongo';
// import { defineNuxtRouteMiddleware } from "nuxt/app";

// export default defineNuxtRouteMiddleware(async (nuxtApp) => {
//     await connectToDatabase();
//     console.log('Database connected successfully');
// });
// // import { Request, Response } from 'express';
// // const express = require('express');
// // const app = express();
// // // 미들웨어이기 때문에 port는 따로 지정하지 않아도 되는 것 같다.

// // app.get("/", async (req: Request, res: Response) => {
// //     console.log('connected')
// //     res.send("Typescript + Node.js + Express Server");
// // });

