//  import type {NextAuthOptions} from 'next-auth'
//  import GoogleProvider from 'next-auth/providers/google'
//  import { CredentialsProvider } from 'next-auth/providers/credentials'

//  export const options: NextAuthOptions = {
//     providers: [
//         GoogleProvider({
//           clientId: process.env.GOOGLE_CLIENT_ID as string,
//           clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
//         }),
//         CredentialsProvider({
//             name: 'Credentials',
//             credentials: {
//                 username: {
//                     label: 'Username:',
//                     type: 'text',
//                     placeholder: 'your-name'
//                 },
//             },
//             async authorize(credentials) {

//             }
//         }) 
//       ]
    // pages: {
    //     signIn: '/signin'
    // },
//  }