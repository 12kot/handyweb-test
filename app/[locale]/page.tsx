import React, { Suspense } from "react";
import Head from "next/head";

import {
  generatePageMetadata,
  IParams,
  IProduct,
  sendSsrRequest,
} from "@/features";

const HomeContainer = React.lazy(() => import("@/components/Home/Home"));

export async function generateMetadata({ params: { locale } }: IParams) {
  return await generatePageMetadata(locale, "home");
}

const Home = async () => {
  const data = await sendSsrRequest<IProduct[]>(
    "products?sort=desc&limit=6",
    []
  );
  const filters = await sendSsrRequest<string[]>("products/categories", []);

  return (
    <>
      <Head>
        <meta name="description" content="kakoe-to opisanie" />
        <meta name="keywords" content="kakie-to slova, mb tovari" />
        <meta name="robots" content="index, follow" />
      </Head>
      <Suspense fallback={<>Loading...</>}>
        <HomeContainer products={data} filters={filters} />
      </Suspense>
    </>
  );
};

export default Home;
