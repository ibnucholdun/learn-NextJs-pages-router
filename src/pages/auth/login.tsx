import React from "react";
import LoginView from "@/views/Auth/Login";
import Head from "next/head";
type Props = {};

const LoginPage = (props: Props) => {
  return (
    <>
      <Head>
        <title>Login - Learn NextJS</title>
      </Head>
      <LoginView />
    </>
  );
};

export default LoginPage;
