import ProductView from "@/views/Product";

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
      <ProductView products={products} />
    </div>
  );
};

export default ProductPage;

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3000/api/product");
  const data = await res.json();

  return {
    props: {
      products: data.data,
    },
  };
};

// syntax penggunan static site generation dengan server side rendering itu sama yang MEMBEDAKAN hanya penggunaan metodenya saja
// di static site generation menggunakan getStaticProps()
// dan ini biasanya digunakan untuk page yang bersifat statis seperti about, contact dll
// dan cara kerjanya ketika menggunakan static site generation itu ketika melakukan perubahan pada isi filenya atau perubahan data dan menjalankan npm run build dan npm run start itu tidak terjadi perubahan
//  dan untuk melakukanya agar file terupdate harus dibuild ulang
// dan cara kerjanya sama seperti serverside tidak menampilkan loading
