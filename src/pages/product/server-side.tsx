import ProductView from "@/views/Product";
import React from "react";

type productType = {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
};

const ProductPage = (props: { products: productType[] }) => {
  const { products } = props;
  return (
    <div>
      <ProductView products={products}></ProductView>
    </div>
  );
};

export default ProductPage;

// dipanggil setiap melakukan request
export const getServerSideProps = async () => {
  // fetch data
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/product`);
  const data = await res.json();

  return {
    props: {
      products: data.data,
    },
  };
};
