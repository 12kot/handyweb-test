import React, { Suspense } from "react";
import Head from "next/head";

import { generatePageMetadata, IParams } from "@/features";

const FavoriteContainer = React.lazy(
  () => import("@/components/Favorite/Favorite")
);

export async function generateMetadata({ params: { locale } }: IParams) {
  return await generatePageMetadata(locale, "favorite");
}

const Favorite = () => {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex" />
      </Head>
      <Suspense fallback={<>Loading...</>}>
        <FavoriteContainer />
      </Suspense>
    </>
  );
};

export default Favorite;
