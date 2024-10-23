import React from "react";
import { notFound } from "next/navigation";

import {
  generatePageMetadata,
  IParams,
  IProduct,
  sendSsrRequest,
} from "@/features";
import { ProductContainer } from "@/components";

export async function generateMetadata({ params: { locale } }: IParams) {
  return await generatePageMetadata(locale, "product");
}

interface Props {
  children: React.ReactNode;
  params: { id: string };
}

const ProductPage = async ({ params: { id } }: Props) => {
  const data = await sendSsrRequest<IProduct | undefined>(
    `products/${id}`,
    undefined
  );

  if (!data) return notFound();
  return <ProductContainer product={data} />;
};

export default ProductPage;
