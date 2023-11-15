import { NextAuthOptions, User } from "next-auth";
import { getServerSession } from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "./prisma";

declare module "next-auth" {
  interface Session {
    user: User & {
      is_admin: Boolean;
    };
  }
}
declare module "next-auth/jwt" {
  interface JWT {
    is_admin: Boolean;
  }
}

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
  ],
  callbacks: {
    async session({ token, session }) {
      if (token) {
        session.user.is_admin = token.is_admin;
      }
      return session;
    },
    async jwt({ token }) {
      const user = await prisma.user.findUnique({
        where: {
          email: token.email!,
        },
      });
      token.is_admin = user?.is_admin!;
      return token;
    },
  },
};

export const getAuthSession = async () => await getServerSession(authOptions);
