import React from "react";
import style from "@/styles/404.module.scss";
type Props = {};

const Custom404 = (props: Props) => {
  return (
    <div className={style.error}>
      <img
        src="/not_found.png"
        alt="Not Found"
        className={style.error__image}
      />
      <div>Halaman Tidak Ditemukan</div>
    </div>
  );
};

export default Custom404;
