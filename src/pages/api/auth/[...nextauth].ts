import { signIn } from "@/utils/db/service";
import { compare } from "bcrypt";
import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    //metode login yang ingin digunakan
    CredentialsProvider({
      type: "credentials",
      name: "Credentials",
      credentials: {
        //metode login yang digunakan dan ini akan ditampilkan juga UI bawaannya
        email: { type: "email", label: "Email" },
        password: { type: "password", label: "Password" },
      },

      //ketika button sign in di klik akan menjalankan code ini
      async authorize(credentials) {
        //digunakan untuk mengecek ke database
        const { email, password } = credentials as {
          email: string;
          password: string;
        };
        const user: any = await signIn({ email });

        if (user) {
          const passwordConfirm = await compare(password, user.password);
          if (passwordConfirm) {
            return user;
          }
          return null;
        } else {
          return null;
        }
      },
    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_OAUTH_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_OAUTH_CLIENT_SECRET || "",
    }),
  ],

  //setelah ini dijalankan ketika berhasil login
  callbacks: {
    jwt({ token, account, user, profile }: any) {
      if (account?.provider === "credentials") {
        token.email = user.email;
        token.fullname = user.fullname;
        token.role = user.role;
      }

      if (account?.provider === "google") {
        // login menggunkan akun google
        const data = {
          email: user.email,
          fullname: user.fullname,
          image: user.image,
          role: user.role,
          type: "google",
        };

        token.email = data.email;
        token.fullname = data.fullname;
        token.role = data.role;
        token.image = data.image;
        token.type = data.type;
      }
      return token;
    },

    async session({ session, token }: any) {
      if ("email" in token) {
        session.user.email = token.email;
      }

      if ("fullname" in token) {
        session.user.fullname = token.fullname;
      }

      if ("image" in token) {
        session.user.image = token.image;
      }

      if ("role" in token) {
        session.user.role = token.role;
      }
      return session;
    },
  },

  pages: {
    signIn: "/auth/login",
  },
};

export default NextAuth(authOptions);
