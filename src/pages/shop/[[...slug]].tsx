import { useRouter } from "next/router";
import React from "react";

type Props = {};

const ShopPage = (props: Props) => {
  const { query } = useRouter();

  return (
    <div>
      <h1>ShopPage</h1>
      <p>Slug : {`${query.slug && query.slug[0] + "-" + query.slug[1]}`}</p>
    </div>
  );
};

export default ShopPage;

// penamaan file [...slug].tsx digunakan untuk dynamic nested routing artinya bisa mengakses routing lebih dari 1 dan tidak terjadi error
// dan jika nama file [[...slug]].tsx digunakan untuk mengakses routing awalnya tanpa menggunakan file tambahan index.tsx didalam foldernya
