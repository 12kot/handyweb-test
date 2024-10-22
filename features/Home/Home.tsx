"use client";

import React, { Suspense } from "react";

import { useQueryParams } from "../hooks";

import { IProduct } from "../types";
import { Filters } from "./Filters";

const Table = React.lazy(() => import("./Table/Table"));

interface Props {
  products: IProduct[];
}

/** Фильтры чисто локально, к товарам никак не применяются. Причина: отсутсвие адекватной реализации на стороне fakestoreapi.com */
/** Там чуть что пропсами в табличку фильтры прокинем и применим в запросе */
export const HomeContainer = ({ products }: Props) => {
  const { paramValue: selectedFilter, setQueryParam } =
    useQueryParams<string>("filters");

  const handleFilterChange = (filter: number) => {
    const newSelectedFilter = Number(selectedFilter) === filter ? null : filter;
    setQueryParam(newSelectedFilter);
  };

  return (
    <>
      <Filters
        handleFilterChange={handleFilterChange}
        selectedFilter={Number(selectedFilter)}
      />
      <Suspense fallback={<div>Loading...</div>}>
        <Table ssrProducts={products} />
      </Suspense>
    </>
  );
};

export default HomeContainer;
