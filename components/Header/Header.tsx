"use client";

import React from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";

import { Input } from "../Input";

import { SVGFavorite, SVGLogo, SVGSearch } from "@/public/svg";

import styles from "./styles.module.scss";

export const Header = () => {
  const t = useTranslations("header");

  return (
    <header className={styles.container}>
      <Link href="/" className={styles.logo}>
        <SVGLogo />
      </Link>
      <Input
        placeholder={t("search")}
        icon={<SVGSearch />}
        className={styles.search}
      />
      <Link href="" className={styles.favorite}>
        <SVGFavorite />
        <p>{t("favorite")}</p>
      </Link>
    </header>
  );
};
