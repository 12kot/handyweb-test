import React from "react";
import { useTranslations } from "next-intl";

import { Link } from "@/navigation";
import { APP_ROUTES } from "@/features";

import styles from "./styles.module.scss";

export const Navigation = () => {
  const t = useTranslations('navigation');

  return (
    <nav className={styles.container}>
      <ul>
        {Object.entries(APP_ROUTES).map(([key, route]) => (
          <li key={key}>
            <Link href={route.path}>{t(route.text)}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
