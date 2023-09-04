import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

type Props = {};

const LoginPage = (props: Props) => {
  // Navigasi menggunakan useRouter yang fungsinya dapat meredirect ke halaman tertentu menggunakan keyword push
  // penerapannya bisa digunakan pada saat falidasi login dan digunakan pada button login untuk meredirect ke halaman utamanya
  const { push } = useRouter();

  const handleLogin = () => {
    push("/product");
  };

  return (
    <div>
      <h1>LoginPage</h1>
      <button onClick={() => handleLogin()}>Login</button>
      <p>
        Belum punya akun? Daftar <Link href={"/auth/register"}>disini</Link>
      </p>
    </div>
  );
};

export default LoginPage;
