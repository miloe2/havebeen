// file: ~/server/api/auth/[...].ts
import { NuxtAuthHandler } from '#auth'
import { connectToDatabase } from '~/server';
import type { FieldPacket, RowDataPacket } from 'mysql2';

import CredentialProvider from 'next-auth/providers/credentials'
import bcrypt from 'bcrypt';
export default NuxtAuthHandler({
    secret: useRuntimeConfig().authSecret,
    pages : {
        signIn : '/login',

    },
    providers: [
        //@ts-expect-error
        CredentialProvider.default({
            name : 'credentials',
            credentials: {},
            async authorize( credentials : { username : string, password : string }){
                // TODO : Fetch user from database
                const connection = await connectToDatabase();
                const sql = `SELECT * FROM t_users WHERE user_name = ?`
                
                const [rows] = await connection.execute(sql, [credentials.username]) as [RowDataPacket[], FieldPacket[]];

                console.log('26',rows)
                if(rows.length === 0){
                    throw createError({
                        statusCode : 401,
                        statusMessage : 'Unauthorized'
                    })
                }
                
                const isValid = await bcrypt.compare(credentials.password, rows[0].user_pwd)
                console.log('35', rows)
                if(!isValid){
                    throw createError({
                        statusCode : 401,
                        statusMessage : 'Unauthorized'
                    })
                }
                return {
                    rows
                }  
            }
        })
        // // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
        // GithubProvider.default({
        //    clientId: 'enter-your-client-id-here',
        //    clientSecret: 'enter-your-client-secret-here'
        // })
    ],
    session : {
        strategy : 'jwt',
    },
    callbacks : {
        async jwt({ token, user, account}){
            if(user){
                token = {
                    ...token,
                    ...user,
                }
            }
            return token;
        },
        async session({session, token}){
            session.user = {
                ...token,
                ...session.user,
            }
            return session;
        }
    }
})
