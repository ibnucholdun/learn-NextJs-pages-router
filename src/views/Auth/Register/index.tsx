import Link from "next/link";
import React from "react";

type Props = {};

const RegisterView = (props: Props) => {
  return (
    <div>
      <h1>Register Page</h1>
      <p>
        Sudah punya akun? Login <Link href={"/auth/login"}>disini</Link>
      </p>
    </div>
  );
};

export default RegisterView;
