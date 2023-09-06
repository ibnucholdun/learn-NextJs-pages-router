import { fetcher } from "@/utils/swr/fetcher";
import DetailProductView from "@/views/DetailProduct";
import { useRouter } from "next/router";
import React from "react";
import useSWR from "swr";

type Props = {};

const DetailProductPage = (props: Props) => {
  const { query } = useRouter();

  const { data, error, isLoading } = useSWR(
    `/api/product/${query.id}`,
    fetcher
  );
  return (
    <div>
      <DetailProductView product={isLoading ? [] : data.data} />
    </div>
  );
};

export default DetailProductPage;
