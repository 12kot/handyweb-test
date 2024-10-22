import type { Action, PayloadAction } from "@reduxjs/toolkit";
import { createApi } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";

import { IProduct } from "@/features";

import { RootState } from "../store";
import { baseQuery } from "./baseQueryWithReauth";

function isHydrateAction(action: Action): action is PayloadAction<RootState> {
  return action.type === HYDRATE;
}

export const catalogApi = createApi({
  reducerPath: "catalogApi",
  baseQuery: baseQuery,
  extractRehydrationInfo(action, { reducerPath }): any {
    if (isHydrateAction(action)) {
      return action.payload[reducerPath];
    }
  },
  endpoints: (builder) => ({
    getProducts: builder.query<
      IProduct[],
      { sort: "desc" | "asc"; limit?: number }
    >({
      query: ({ sort, limit }) => ({
        url: `/products`,
        params: {
          limit,
          sort,
        },
      }),
    }),
    getFilters: builder.query<string[], void>({
      query: () => `/products/categories`,
    }),
  }),
});

export const { useGetProductsQuery, useGetFiltersQuery } = catalogApi;
