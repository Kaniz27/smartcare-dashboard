// api/invoiceApi.ts

import { InvoiceForm } from "../../schema";
import { InvoiceData, InvoiceListResponse, singleInvoiceResponse } from "../../types";
import { baseApi } from "./baseApi";

export const invoiceApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getInvoices: builder.query<
      InvoiceListResponse,
      { page: number; limit: number; status?: string }
    >({
      query: (params) => ({
        url: "/invoices/",
        params,
        service: "system",
      }),
    }),
    getBillingInvoices: builder.query<
      InvoiceListResponse,
      { page: number; limit: number; status?: string }
    >({
      query: (params) => ({
        url: "/billing/invoices/",
        params,
        service: "system",
      }),
    }),
    getSignleInvoice: builder.query<singleInvoiceResponse, string>({
      query: (id) => ({
        url: `/invoices/${id}`,
        service: "system",
      }),
    }),
    getBillingSignleInvoice: builder.query<singleInvoiceResponse, string>({
      query: (id) => ({
        url: `/billing/invoices/${id}`,
        service: "system",
      }),
    }),
    createInvoice: builder.mutation<InvoiceData, FormData>({
      query: (body) => ({
        url: "/invoices/",
        method: "POST",
        body,
        service: "system",
      }),
    }),
  }),
});

export const {
  useGetInvoicesQuery,
  useGetBillingInvoicesQuery,
  useGetSignleInvoiceQuery,
  useGetBillingSignleInvoiceQuery,
  useCreateInvoiceMutation,
} = invoiceApi;
