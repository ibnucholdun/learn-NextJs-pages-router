import style from "./Navbar.module.css";
import React from "react";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className={style.navbar}>
      <h2>Navbar</h2>
    </div>
  );
};

export default Navbar;
