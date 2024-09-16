import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import authConfig from "./auth.config"
import { prisma } from "./lib/prisma"

 
export const { auth, handlers:{GET,POST}, signIn, signOut } = NextAuth({
  callbacks:{
    async session({session,token}){
      if(token.sub && session){
        session.user.id = token.sub;
      }
      return session;
    }
  },
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  ...authConfig,
})