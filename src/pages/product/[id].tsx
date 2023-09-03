import { useRouter } from "next/router";
import React from "react";

type Props = {};

const DetailProductPage = (props: Props) => {
  const { query } = useRouter();

  return (
    <div>
      <h1>DetailProductPage</h1>
      {/* untuk quernya mengikuti nama filenya */}
      <p>Product id : {query.id}</p>
    </div>
  );
};

export default DetailProductPage;
