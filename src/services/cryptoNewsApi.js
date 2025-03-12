import { createApi , fetchBaseQuery } from "@reduxjs/toolkit/query/react";


const cryptoNewsHeaders = {
    'x-rapidapi-key': '71300e2f51msh493a2407e7ff7b6p16992ajsn965c2ef0f14b',
    'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
    'X-BingApis-SDK': 'true'
}

const baseUrl = 'https://bing-news-search1.p.rapidapi.com';

const createRequest = (url) => ({ url, headers : cryptoNewsHeaders})

export const cryptoNewsApi = createApi ({
    reducerPath:'cryptoNewsApi',
    baseQuery: fetchBaseQuery({baseUrl}),
   endpoints: (builder) => ({
    getCryptoNews: builder.query({
        query: ({ newsCategory, count }) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),    })
 })
})
export const { useGetCryptoNewsQuery } = cryptoNewsApi;
