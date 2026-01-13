import api from "../../Utils/Api";
import { FIND_PRODUCTS_REQUEST } from "./ActionType";
import { FIND_PRODUCTS_SUCCESS } from "./ActionType";
import { FIND_PRODUCTS_FAILURE } from "./ActionType";
import { FIND_PRODUCT_BY_ID_REQUEST } from "./ActionType";
import { FIND_PRODUCT_BY_ID_SUCCESS } from "./ActionType";
import { FIND_PRODUCT_BY_ID_FAILURE } from "./ActionType";


export const findProduct=(reqData)=>async (dispatch)=>{

    dispatch({type: FIND_PRODUCTS_REQUEST});
    const {colors, sizes, price, category, minprice, maxprice, stock, sort, pagenumber, pagesize} = reqData;
    try{
        const {data}=await api.get(`/api/products?colors=${colors}&sizes=${sizes}&price=${price}
            &category=${category}&minprice=${minprice}&maxprice=${maxprice}&stock=${stock}
            &sort=${sort}&pagenumber=${pagenumber}&pagesize=${pagesize}`);
            console.log("product data", data);
        dispatch({type: FIND_PRODUCTS_SUCCESS, payload: data});

    } catch(error){
        dispatch({type: FIND_PRODUCTS_FAILURE, payload: error.message});
    }
} 

export const findProductById=(reqData)=>async (dispatch)=>{
    
    dispatch({type: FIND_PRODUCT_BY_ID_REQUEST});
    const {productId}=reqData;
    try{
        const {data}=await api.get(`/api/products/${productId}`);
        dispatch({type: FIND_PRODUCT_BY_ID_SUCCESS, payload: data});
    } catch(error){
        dispatch({type: FIND_PRODUCT_BY_ID_FAILURE, payload: error.message});
    }
}