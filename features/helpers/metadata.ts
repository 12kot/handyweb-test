import { getMessages } from "next-intl/server";

export const generatePageMetadata = async (locale: string, pageKey: string) => {
  const messages: any = await getMessages({ locale });
  const title = messages[pageKey]?.title || "Default Title";
  const description = messages[pageKey]?.description || "Default Description";

  return {
    title,
    description,
    keywords: "products, categories, shop",
    openGraph: {
      title,
      description,
      type: "website",
      url: "path",
      images: [
        {
          url: "path",
          width: 800,
          height: 600,
          alt: title,
        },
      ],
    },
  };
};