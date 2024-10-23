"use client";

import React, { useState } from "react";
import { useTranslations } from "next-intl";

import { Input } from "../Input";

import { Link } from "@/navigation";
import { APP_ROUTES, useDebounce } from "@/features";
import { SVGFavorite, SVGLogo, SVGSearch } from "@/public/svg";

import styles from "./styles.module.scss";

export const Header = () => {
  const t = useTranslations("header");

  const [search, setSearch] = useState<string>('');
  const debounce = useDebounce<string>(search, 500);

  console.log('Отправляем запрос', debounce);

  return (
    <header className={styles.container}>
      <Link href={APP_ROUTES.MAIN.path} className={styles.logo}>
        <SVGLogo />
      </Link>
      <Input
        placeholder={t("search")}
        icon={<SVGSearch />}
        className={styles.search}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Link href={APP_ROUTES.FAVORITE.path} className={styles.favorite}>
        <SVGFavorite />
        <p>{t("favorite")}</p>
      </Link>
    </header>
  );
};
