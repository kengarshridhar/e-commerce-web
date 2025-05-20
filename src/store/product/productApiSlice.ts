import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type product = {
    id: string
    name: string
    description: string
    price: number
    category: string
    image: string
    stock: number
}

type ProductsApiResponse = {
    products: product[]
    total: number
    skip: number
    limit: number
}

export const ProductApiSlice = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: "https://retbo.local/wp-json/wp/v2" }),
    reducerPath: "product",
    tagTypes: ["products"],
    endpoints: build => ({
        
    })
})

// {
//     "id": 736,
//     "date": "2024-06-02T12:53:19",
//     "date_gmt": "2024-06-02T12:53:19",
//     "guid": {
//       "rendered": "https://retbo.local/product/reverse-withdrawal-payment/"
//     },
//     "modified": "2024-06-02T12:53:19",
//     "modified_gmt": "2024-06-02T12:53:19",
//     "slug": "reverse-withdrawal-payment",
//     "status": "publish",
//     "type": "product",
//     "link": "https://retbo.local/product/reverse-withdrawal-payment/",
//     "title": {
//       "rendered": "Reverse Withdrawal Payment"
//     },
//     "content": {
//       "rendered": "\u003Cp\u003EThis is Dokan reverse withdrawal payment product, do not delete.\u003C/p\u003E\n",
//       "protected": false
//     },
//     "excerpt": {
//       "rendered": "\u003Cp\u003EThis is Dokan reverse withdrawal payment product, do not delete.\u003C/p\u003E\n",
//       "protected": false
//     },
//     "featured_media": 0,
//     "comment_status": "open",
//     "ping_status": "closed",
//     "template": "",
//     "meta": [],
//     "product_cat": [],
//     "product_tag": [],
//     "_links": {
//       "self": [
//         {
//           "href": "https://retbo.local/wp-json/wp/v2/product/736"
//         }
//       ],
//       "collection": [
//         {
//           "href": "https://retbo.local/wp-json/wp/v2/product"
//         }
//       ],
//       "about": [
//         {
//           "href": "https://retbo.local/wp-json/wp/v2/types/product"
//         }
//       ],
//       "replies": [
//         {
//           "embeddable": true,
//           "href": "https://retbo.local/wp-json/wp/v2/comments?post=736"
//         }
//       ],
//       "wp:attachment": [
//         {
//           "href": "https://retbo.local/wp-json/wp/v2/media?parent=736"
//         }
//       ],
//       "wp:term": [
//         {
//           "taxonomy": "product_cat",
//           "embeddable": true,
//           "href": "https://retbo.local/wp-json/wp/v2/product_cat?post=736"
//         },
//         {
//           "taxonomy": "product_tag",
//           "embeddable": true,
//           "href": "https://retbo.local/wp-json/wp/v2/product_tag?post=736"
//         }
//       ],
//       "curies": [
//         {
//           "name": "wp",
//           "href": "https://api.w.org/{rel}",
//           "templated": true
//         }
//       ]
//     }
//   },