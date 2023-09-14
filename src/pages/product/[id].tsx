import { fetcher } from "@/utils/swr/fetcher";
import DetailProductView from "@/views/DetailProduct";
import { useRouter } from "next/router";
import React from "react";
import useSWR from "swr";

type productType = {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
};

// const DetailProductPage = ({ product }: { product: productType }) => {
//   const { query } = useRouter();

//   // clientside
//   // const { data, error, isLoading } = useSWR(
//   //   `/api/product/${query.id}`,
//   //   fetcher
//   // );
//   return (
//     <div>
//       {/* Clientside */}
//       {/* <DetailProductView product={isLoading ? [] : data.data} /> */}

//       {/* Serverside */}
//       <DetailProductView product={product} />
//     </div>
//   );
// };

// export default DetailProductPage;

// // Serverside
// export const getServerSideProps = async ({
//   params,
// }: {
//   params: { id: string };
// }) => {
//   // fetch data
//   const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/product/${params.id}`);
//   const data = await res.json();

//   return {
//     props: {
//       product: data.data,
//     },
//   };
// };

//STATIC SITE GENERATION

const DetailProductPage = ({ product }: { product: productType }) => {
  return (
    <div>
      <DetailProductView product={product} />
    </div>
  );
};

export default DetailProductPage;

export const getStaticPaths = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/product`);
  const data = await res.json();

  const paths = data.data.map((product: productType) => ({
    params: { id: product.id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async ({
  params,
}: {
  params: { id: string };
}) => {
  // fetch data
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/product/${params.id}`
  );
  const data = await res.json();

  return {
    props: {
      product: data.data,
    },
  };
};
