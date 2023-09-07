import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

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
        const user: any = {
          // ini harusnya diambil dari database dan dibawah sebagai contoh tidak menggunakann DB
          id: 1,
          email: email,
          password: password,
        };

        if (user) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],

  //setelah ini dijalankan ketika berhasil login
  callbacks: {
    jwt({ token, account, user, profile }) {
      if (account?.provider === "credentials") {
        token.email = user.email;
      }
      return token;
    },

    async session({ session, token }: any) {
      if ("email" in token) {
        session.user.email = token.email;
      }
      return session;
    },
  },
};

export default NextAuth(authOptions);
