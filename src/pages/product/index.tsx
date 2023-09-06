import { fetcher } from "@/utils/swr/fetcher";
import ProductView from "@/views/Product";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import useSWR from "swr";

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const { push } = useRouter();

  // useEffect(() => {
  //   fetch("/api/product").then((res) => {
  //     res.json().then((data) => {
  //       setProducts(data.data);
  //     });
  //   });
  // }, []);

  // fetching data menggunakan swr
  const { data, error, isLoading } = useSWR("/api/product", fetcher);

  return (
    <>
      {/* Fetching menggunakan useEffect dan fetch() */}
      {/* <ProductView products={products}></ProductView> */}

      {/* Fetching menggunakan useSWR */}
      <ProductView products={isLoading ? [] : data.data}></ProductView>
    </>
  );
};

export default ProductPage;
