import NextAuth from 'next-auth/next';
import GithubProvider from 'next-auth/providers/github';
import FacebookProvider from "next-auth/providers/facebook";
import GoogleProvider from "next-auth/providers/google";
import { prisma } from '@/Utils/PrismaGlobal';
import { PrismaAdapter } from "@next-auth/prisma-adapter";

export default NextAuth 
({    
    providers:
    [
        GithubProvider
        ({
            clientId: `${process.env.GITHUB_ID}`,
            clientSecret: `${process.env.GITHUB_SECRET}`,
        }),

        FacebookProvider
        ({
            clientId: `${process.env.FACEBOOK_ID}`,
            clientSecret: `${process.env.FACEBOOK_SECRET}`
        }),
    ],
})

