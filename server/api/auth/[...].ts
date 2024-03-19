// file: ~/server/api/auth/[...].ts
import { NuxtAuthHandler } from '#auth'
import CredentialProvider from 'next-auth/providers/credentials'

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
              return {}  
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
