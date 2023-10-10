import { getServerSession } from 'next-auth';
import { NextAuthOptions, User } from 'next-auth';
import { AdapterUser } from 'next-auth/adapters';
import GoogleProvider from 'next-auth/providers/google';
import jsonwebtoken from 'jsonwebtoken';
import { JWT } from 'next-auth/jwt';

import { SessionInterface, UserProfile } from '@/common.types';
import { createUser, getUser } from './actions';

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],

  //   jwt: {
  //     encode: ({ secret, token }) => {},
  //     decode: async ({ secret, token }) => {},
  //   },

  theme: {
    colorScheme: 'light',
    logo: '/favicon.png',
  },

  callbacks: {
    session: async ({ session }) => {
      return session;
    },

    signIn: async ({ user }: { user: AdapterUser | User }) => {
      try {
        const userExist = (await getUser(user?.email!)) as {
          user?: UserProfile;
        };

        if (userExist?.user) {
          await createUser(
            user?.name as string,
            user?.email as string,
            user?.image as string
          );
        }

        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
  },
};

export const getCurrentUser = async () => {
  const session = (await getServerSession(authOptions)) as SessionInterface;

  return session;
};
