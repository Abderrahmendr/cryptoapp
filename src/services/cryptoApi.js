import { createApi , fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
'x-rapidapi-key': '71300e2f51msh493a2407e7ff7b6p16992ajsn965c2ef0f14b',
'x-rapidapi-host': 'coinranking1.p.rapidapi.com'
}

const baseUrl = 'https://api.coinranking.com/v2';

const createRequest = (url) => ({ url, headers : cryptoApiHeaders})

export const cryptoApi = createApi ({
    reducerPath:'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl}),
   endpoints: (builder) => ({
      getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit = ${count}`)
        })
 })
})


export  const {useGetCryptosQuery} = cryptoApi;