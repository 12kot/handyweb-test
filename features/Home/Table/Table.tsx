"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

import { Link } from "@/navigation";
import { cx, IProduct, useQueryParams } from "@/features";
import { useGetProductsQuery } from "@/store";

import { SVGArrowDown, SVGArrowUp } from "@/public/svg";

import styles from "./styles.module.scss";

type ISort = "asc" | "desc";

{/** Лимит сделан так, а не через redux и запрос новых элементов из-за отсутствия у апишки такой возможности */}
export const Table = () => {
  const t = useTranslations('home');

  const [limit, setLimit] = useState<number>(6);
  const { paramValue: sortType, setQueryParam } = useQueryParams<ISort>("sort");
  const { data, isLoading } = useGetProductsQuery({
    sort: sortType || "desc",
    limit,
  });

  if (isLoading) return <p>Тут будет крутиться лоадер</p>;
  if (!data) return <>Тут мы можем перенаправить на страницу ошибки</>;

  return (
    <section className={styles.container}>
      <div className={styles.path}>
        {/** Ожидаю это с бека, но не получаю */}
        {["Main", "Catalog"].map((el, i) => (
          <Link
            href="/kakaya-to-id"
            key={i}
            className={cx(i === 1 && styles.bold)}
          >
            {`${el} ${i !== 1 ? ">" : ""}`}
          </Link>
        ))}
      </div>
      {/** Ожидаю это с бека, но не получаю */}
      <h1>Catalog</h1>
      {/** api сортирует по id, не по цене. Вина в неправильной сортировке не моя. На фронте сортировать глупо */}
      <button
        onClick={() => setQueryParam(sortType === "asc" ? "desc" : "asc")}
        className={styles.sort}
      >
        <p>{t('price')}</p>
        {sortType === "asc" ? <SVGArrowDown /> : <SVGArrowUp />}
      </button>
      <div className={styles.products}>
        {data.map((pr) => (
          <Card {...pr} key={pr.id} />
        ))}
      </div>
      <button onClick={() => setLimit((v) => v + 6)}>More</button>
    </section>
  );
};

interface CardProps extends IProduct {}

const Card = ({ id, image, title, price, category }: CardProps) => {
  return (
    <Link href={`/${id}`} className={styles.card}>
      <span>{category}</span>
      <b className={styles.title} title={title}>
        {title}
      </b>
      <div className={styles.image}>
        <Image
          style={{ width: "80%", height: "80%" }}
          width={0}
          sizes="100vw"
          height={0}
          src={image}
          alt={title}
        />
      </div>
      <p className={styles.price}>{price} $</p>
    </Link>
  );
};
