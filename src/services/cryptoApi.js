import { createApi , fetchBaseQuery } from "@reduxjs/toolkit/query";

const creatoApiHeaders = {
'x-rapidapi-key': '71300e2f51msh493a2407e7ff7b6p16992ajsn965c2ef0f14b',
'x-rapidapi-host': 'coinranking1.p.rapidapi.com'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) => ({ url, Headers:creatoApiHeaders})

export const cryptoApi = createApi ({
    reducerspath:'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: () => createRequest('/coins')
        })
    })
})


export  const {useGetCryptosQuery} = cryptoApi;