import React, { ReactNode } from "react";

import { cx } from "@/features";
import { Header, Footer, Navigation } from "@/components";

import styles from "./styles.module.scss";

interface Props {
  children: ReactNode;
  header?: boolean;
  footer?: boolean;
  navigation?: boolean;
}

export const AppHolder = ({ children, footer, header, navigation }: Props) => {
  return (
    <main className={cx(styles.container, header && styles.header)}>
      {header && <Header />}
      {navigation && <Navigation />}
      {children}
      {footer && <Footer />}
    </main>
  );
};
