"use client";

import React from "react";
import Image from "next/image";

import { cx, IProduct, useLocalStorage } from "@/features";
import { ProductPath } from "@/components";

import { SVGFavorite, SVGStar } from "@/public/svg";

import styles from "./styles.module.scss";
import { useTranslations } from "next-intl";

interface Props {
  product: IProduct;
}

export const ProductContainer = ({ product }: Props) => {
  const t = useTranslations("product");
  const [favorite, setFavorite] = useLocalStorage<number[]>("favorite", []);

  const handleFavorite = () => {
    if (favorite?.includes(product.id))
      return setFavorite(favorite?.filter((v) => v !== product.id));

    setFavorite([...(favorite || []), product.id]);
  };

  return (
    <div className={styles.container}>
      {/** Ожидаю это с бека, но не получаю */}
      {<ProductPath urls={["Main", "Catalog", product.title]} />}
      <div className={styles.info}>
        <section className={styles.image}>
          <Image
            style={{ width: "80%", height: "80%" }}
            width={0}
            sizes="100vw"
            height={0}
            src={product.image}
            alt={product.title}
          />
        </section>
        <section className={styles.desc}>
          <div className={styles.name}>
            <div className={styles.title}>
              <h1>{product.title}</h1>
              <div className={styles.stars}>
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <SVGStar isYellow={i + 1 < product.rating.rate} key={i} />
                  ))}
                <p>{t("rated", { rating: product.rating.count })}</p>
              </div>
            </div>
            <div className={styles.actions}>
              <button onClick={handleFavorite}>
                <p>
                  {favorite?.includes(product.id)
                    ? t("removeToFav")
                    : t("addToFav")}
                </p>
                <SVGFavorite />
              </button>
            </div>
          </div>
          <hr />
          <div className={styles.price}>
            <div className={styles.block}>
              <b>{t('description')}</b>
              <p>{product.description}</p>
            </div>
            <div className={cx(styles.block, styles.rigth)}>
              <h2>{t('priceValue', {price: product.price})}</h2>
              <button>{t('buy')}</button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductContainer;
