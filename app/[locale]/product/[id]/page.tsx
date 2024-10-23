import React, { Suspense } from "react";
import Head from "next/head";

import {
  generatePageMetadata,
  IParams,
  IProduct,
  sendSsrRequest,
} from "@/features";
import { redirect } from "next/navigation";

const ProductContainer = React.lazy(
  () => import("@/components/Product/Product")
);

export async function generateMetadata({ params: { locale } }: IParams) {
  return await generatePageMetadata(locale, "product");
}

interface Props {
  children: React.ReactNode;
  params: { id: string };
}

const Product = async ({ params: { id } }: Props) => {
  const data = await sendSsrRequest<IProduct | undefined>(
    `products/${id}`,
    undefined
  );

  if (!data) return redirect("/ru/404");
  return (
    <>
      <Head>
        <meta name="description" content="kakoe-to opisanie" />
        <meta name="keywords" content="kakie-to slova, mb tovari" />
        <meta name="robots" content="index, follow" />
      </Head>
      <Suspense fallback={<>Loading...</>}>
        <ProductContainer product={data} />;
      </Suspense>
    </>
  );
};

export default Product;
