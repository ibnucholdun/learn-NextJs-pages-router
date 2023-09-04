import React from "react";
import Link from "next/link";

type Props = {};

const LoginPage = (props: Props) => {
  return (
    <div>
      <h1>LoginPage</h1>
      <p>
        Belum punya akun? Daftar <Link href={"/auth/register"}>disini</Link>
      </p>
    </div>
  );
};

export default LoginPage;
