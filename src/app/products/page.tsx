import { NextPage } from "next";
import Head from "next/head";

const Products: NextPage = () => {
  return (
    <>
      <Head>
        <title>Products</title>
        <meta name="description" content="Products" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1 className="text-3xl text-amber-800 text-center">Products</h1>
      </div>
    </>
  );
};

export default Products;
