import style from "./Navbar.module.css";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";

type Props = {};

const Navbar = (props: Props) => {
  const { data } = useSession();
  return (
    <div className={style.navbar}>
      <div className="big">Navbar</div>
      <div>
        {data?.user?.email}{" "}
        {data ? (
          <button className={style.button} onClick={() => signOut()}>
            Sign Out
          </button>
        ) : (
          <button className={style.button} onClick={() => signIn()}>
            Sign In
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
