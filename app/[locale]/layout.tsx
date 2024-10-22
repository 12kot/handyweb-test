import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

import { AppHolder } from "@/layouts";

import StoreProvider from "./StoreProvider";

import "../globals.scss";

interface Props {
  children: React.ReactNode;
  params: { locale: string };
}

const RootLayout = async ({ children, params: { locale } }: Props) => {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <StoreProvider>
          <NextIntlClientProvider messages={messages}>
            <AppHolder header footer navigation>
              {children}
            </AppHolder>
          </NextIntlClientProvider>
        </StoreProvider>
      </body>
    </html>
  );
};

export default RootLayout;
