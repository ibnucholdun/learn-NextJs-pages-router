import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

type Props = {};

const ProductPage = (props: Props) => {
  const [isLogin, setIsLogin] = useState(false);
  const { push } = useRouter();
  useEffect(() => {
    if (!isLogin) {
      push("/auth/login");
    }
  }, []);
  return <div>ProductPage</div>;
};

export default ProductPage;
