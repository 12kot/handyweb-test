"use client";

import { useTranslations } from "next-intl";

import { useGetFiltersQuery } from "@/store";

import styles from "./styles.module.scss";

interface Props {
  handleFilterChange: (filter: number) => void,
  selectedFilter: number | null
  initFilters: string[],
}

export const Filters = ({ handleFilterChange, selectedFilter, initFilters }: Props) => {
  const t = useTranslations('home');
  const { data } = useGetFiltersQuery();

  const filtres = initFilters || data;

  return (
    <div className={styles.container}>
      <h3>{t('filters')}</h3>
      <form className={styles.form}>
        {filtres.map((f, id) => (
          <div key={id} className={styles.checkbox}>
            <input
              type="checkbox"
              id={f}
              name={f}
              checked={selectedFilter === id}
              onChange={() => handleFilterChange(id)}
            />
            <label htmlFor={f}>{f}</label>
          </div>
        ))}
      </form>
    </div>
  );
};
