"use client";

import React, { useCallback, useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

import { Link } from "@/navigation";
import {
  APP_ROUTES,
  IProduct,
  sendSsrRequest,
  useLocalStorage,
} from "@/features";

import styles from "./styles.module.scss";

export const FavoriteContainer = () => {
  const t = useTranslations("favorite");

  const [products, setProducts] = useState<IProduct[]>([]);
  const [favorite, setFavorite] = useLocalStorage<number[]>("favorite", []);

  useEffect(() => {
    if (!favorite?.length) return;

    const sendReq = async () => {
      const requests = favorite.map((id) =>
        sendSsrRequest<IProduct | undefined>(`products/${id}`, undefined)
      );
      const responses = await Promise.all(requests);
      const pr: IProduct[] = responses.filter((res) => !!res);
      setProducts(pr);
    };

    sendReq();
  }, [favorite]);

  const handleFavorite = useCallback(
    (id: number) => {
      const newFav = (favorite || []).filter((v) => v !== id);
      setFavorite(newFav);

      if (!newFav.length) setProducts([]);
    },
    [favorite, setFavorite]
  );

  const memoizedProducts = useMemo(
    () =>
      products.map((f) => (
        <MemoizedCard product={f} handleFavorite={handleFavorite} key={f.id} />
      )),
    [products, handleFavorite]
  );

  return (
    <div className={styles.container}>
      <p className={styles.header}>{t("title")}</p>
      <hr />
      <section className={styles.cards}>
        <p className={styles.items}>
          {t("items", { count: favorite?.length || 0 })}
        </p>
        {memoizedProducts}
      </section>
    </div>
  );
};

interface Props {
  product: IProduct;
  handleFavorite: (id: number) => void;
}

const Card = ({ product, handleFavorite }: Props) => {
  const t = useTranslations("favorite");

  const handleDelete = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    handleFavorite(product.id);
  };

  return (
    <Link
      href={`${APP_ROUTES.PRODUCT.path}/${product.id}`}
      className={styles.card}
    >
      <div className={styles.image}>
        <Image
          style={{ width: "80%", height: "80%" }}
          width={0}
          height={0}
          sizes="100vw"
          src={product.image}
          alt={product.title}
          loading="lazy"
        />
      </div>
      <div className={styles.name}>
        <span>{product.category}</span>
        <h3>{product.title}</h3>
      </div>
      <div className={styles.price}>
        <h3>{t("priceValue", { price: product.price })}</h3>
        <button onClick={handleDelete}>
          <span>{t("remove")}</span>
        </button>
      </div>
    </Link>
  );
};

const MemoizedCard = React.memo(Card);

export default FavoriteContainer;
