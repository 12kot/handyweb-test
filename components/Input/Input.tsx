import React, { ReactNode } from "react";

import { cx } from "@/features";

import styles from "./styles.module.scss";

interface Props
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  icon?: ReactNode;
}

export const Input = ({ icon, className, ...rest }: Props) => {
  return (
    <label className={cx(styles.container, className)}>
      <input {...rest} />
      {icon}
    </label>
  );
};
