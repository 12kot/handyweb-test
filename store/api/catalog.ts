import { createApi } from "@reduxjs/toolkit/query/react";

import { IProduct } from "@/features";

import { baseQuery } from "./baseQueryWithReauth";

export const catalogApi = createApi({
  reducerPath: "catalogApi",
  baseQuery: baseQuery,
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
