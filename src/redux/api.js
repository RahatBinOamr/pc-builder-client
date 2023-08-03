import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const api = createApi({
  reducerPath: 'product',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pc-builder-pi.vercel.app' }),
  endpoints: builder => ({
    getAllProducts: builder.query({
      query: url => url,
    }),
  }),
});
export const { useGetAllProductsQuery } = api;
