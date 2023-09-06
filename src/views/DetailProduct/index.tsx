import React from "react";
import styles from "./DetailProduct.module.scss";

type productType = {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
};

const DetailProductView = ({ product }: { product: productType }) => {
  return (
    <div>
      <h1 className={styles.title}>DetailProductPage</h1>
      <div className={styles.productDetail}>
        <div className={styles.productDetail__image}>
          <img src={product.image} alt={product.name} />
        </div>
        <h4 className={styles.productDetail__name}>{product.name}</h4>
        <p className={styles.productDetail__category}>{product.category}</p>
        <p className={styles.productDetail__price}>
          {product.price && //ini untuk menghandle jika product tidak memiliki price
            product.price.toLocaleString("id-ID", {
              style: "currency",
              currency: "IDR",
            })}
        </p>
      </div>
    </div>
  );
};

export default DetailProductView;
