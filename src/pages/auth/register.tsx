import RegisterView from "@/views/Auth/Register";
import Head from "next/head";

type Props = {};

const RegisterPage = (props: Props) => {
  return (
    <>
      <Head>
        <title>Register - Learn NextJS</title>
      </Head>
      <RegisterView />
    </>
  );
};

export default RegisterPage;
