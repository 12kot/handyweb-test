"use client";

import React from "react";

import { useQueryParams } from "../hooks";

import { Filters } from "./Filters";
import { Table } from "./Table";

/** Фильтры чисто локально, к товарам никак не применяются. Причина: отсутсвие адекватной реализации на стороне fakestoreapi.com */
/** Там чуть что пропсами в табличку фильтры прокинем и применим в запросе */
export const HomeContainer = () => {
  const { paramValue: selectedFilter, setQueryParam } = useQueryParams<string>("filters");

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
      <Table />
    </>
  );
};
