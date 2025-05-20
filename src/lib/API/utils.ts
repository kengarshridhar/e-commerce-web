import { PRODUCTS } from "../../constants/routes"
import Api from "./rootApi"
 

export const getProducts = async() => {
    const resp = await Api.get(PRODUCTS);
    return resp.data;
}