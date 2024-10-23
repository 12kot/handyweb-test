"use client";

import React, { Suspense } from "react";

import { useQueryParams } from "../../features/hooks";

import { IProduct } from "../../features/types";
import { Filters } from "./Filters";

import styles from "./styles.module.scss";
import { Table } from "./Table";

interface Props {
  products: IProduct[];
  filters: string[];
}

/** Фильтры чисто локально, к товарам никак не применяются. Причина: отсутсвие адекватной реализации на стороне fakestoreapi.com */
/** Там чуть что пропсами в табличку фильтры прокинем и применим в запросе */
export const HomeContainer = ({ products, filters }: Props) => {
  const { paramValue: selectedFilter, setQueryParam } =
    useQueryParams<string>("filters");

  const handleFilterChange = (filter: number) => {
    const newSelectedFilter = Number(selectedFilter) === filter ? null : filter;
    setQueryParam(newSelectedFilter);
  };

  return (
    <div className={styles.container}>
      <Filters
        initFilters={filters}
        handleFilterChange={handleFilterChange}
        selectedFilter={Number(selectedFilter)}
      />
      <Table ssrProducts={products} />
    </div>
  );
};

export default HomeContainer;
