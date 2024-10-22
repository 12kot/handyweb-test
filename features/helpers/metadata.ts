import { getMessages } from "next-intl/server";

export const generatePageMetadata = async (locale: string, pageKey: string) => {
  const messages: any = await getMessages({ locale });
  const title = messages[pageKey]?.title || "Default Title";

  return {
    title,
  };
};
