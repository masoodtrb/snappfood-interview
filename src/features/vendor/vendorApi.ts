import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { FinalResult, VendorType } from "./vendorType";

type Params = {
  page: number;
  page_size: number;
};

export const vendorApi = createApi({
  reducerPath: "vendorApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://snappfood.ir/mobile/v3/" }),
  endpoints: (builder) => ({
    getVendor: builder.query<FinalResult[], Params>({
      query: ({ page = 0, page_size = 10 }) =>
        `restaurant/vendors-list?page=${page}&page_size=${page_size}&lat=35.739&long=51.536`,
      serializeQueryArgs: ({ endpointName, queryArgs }) => {
        return endpointName;
      },
      merge: (currentData, newData) => {
        currentData.push(...newData);
        // return currentData;
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg?.page !== previousArg?.page;
      },
      transformResponse(baseQueryReturnValue: VendorType) {
        return baseQueryReturnValue.data.finalResult;
      }
    })
  })
});

export const { useGetVendorQuery } = vendorApi;
