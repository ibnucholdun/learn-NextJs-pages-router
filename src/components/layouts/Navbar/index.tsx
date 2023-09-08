import style from "./Navbar.module.scss";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";

type Props = {};

const Navbar = (props: Props) => {
  const { data }: any = useSession();
  return (
    <div className={style.navbar}>
      <div className="big">Navbar</div>
      <div className={style.navbar__user}>
        {data && data.user.name}{" "}
        {data && data.user.image && (
          <img
            src={data.user.image}
            alt={data.user.name}
            className={style.navbar__user__avatar}
          />
        )}
        {data ? (
          <button
            className={style.navbar__user__button}
            onClick={() => signOut()}
          >
            Sign Out
          </button>
        ) : (
          <button
            className={style.navbar__user__button}
            onClick={() => signIn()}
          >
            Sign In
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
