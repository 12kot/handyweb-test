import React from "react";

import { cx } from "@/features";
import { Link } from "@/navigation";

import styles from "./styles.module.scss";

interface Props {
  urls: string[];
}

export const ProductPath = ({ urls }: Props) => {
  return (
    <div className={styles.path}>
      {urls.map((el, i) => (
        <Link
          href="/kakaya-to-id"
          key={i}
          className={cx(i === urls.length - 1 && styles.bold)}
        >
          {`${el} ${i !== urls.length - 1 ? ">" : ""}`}
        </Link>
      ))}
    </div>
  );
};
