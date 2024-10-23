import React from "react";

import { cx, IProduct } from "@/features";
import { ProductPath } from "@/components";

import styles from "./styles.module.scss";
import Image from "next/image";

import { SVGFavorite, SVGStar } from "@/public/svg";

interface Props {
  product: IProduct;
}

export const ProductContainer = ({ product }: Props) => {
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
                <p>({product.rating.count} rated)</p>
              </div>
            </div>
            <div className={styles.actions}>
              <button>
                <p>Add To Favorite</p> <SVGFavorite />
              </button>
            </div>
          </div>
          <hr />
          <div className={styles.price}>
            <div className={styles.block}>
              <b>Description</b>
              <p>{product.description}</p>
            </div>
            <div className={cx(styles.block, styles.rigth)}>
              <h2>{product.price} $</h2>
              <button>КУПИТЬ</button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductContainer;
