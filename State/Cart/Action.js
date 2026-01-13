import {api} from "../../config/apiConfig";
import { ADD_ITEM_TO_CART_REQUEST } from "./ActionType";
import { ADD_ITEM_TO_CART_SUCCESS } from "./ActionType";
import { ADD_ITEM_TO_CART_FAILURE } from "./ActionType";
import { GET_CART_ITEMS_REQUEST } from "./ActionType";
import { GET_CART_ITEMS_SUCCESS } from "./ActionType";
import { GET_CART_ITEMS_FAILURE } from "./ActionType";
import { REMOVE_ITEM_FROM_CART_REQUEST } from "./ActionType";
import { REMOVE_ITEM_FROM_CART_SUCCESS } from "./ActionType";
import { REMOVE_ITEM_FROM_CART_FAILURE } from "./ActionType";
import { UPDATE_CART_ITEM_REQUEST } from "./ActionType";
import { UPDATE_CART_ITEM_SUCCESS } from "./ActionType";
import { UPDATE_CART_ITEM_FAILURE } from "./ActionType";

export const getCart =()=>async (dispatch)=>{
    dispatch({type: GET_CART_ITEMS_REQUEST});
    try{
        const {data}=await api.get('/api/cart');
        dispatch({type: GET_CART_ITEMS_SUCCESS, payload: data});
        console.log("cart data", data);
    }
    catch(error){
        dispatch({type: GET_CART_ITEMS_FAILURE, payload: error.message});
    }
}

export const addItemToCart = (reqData) =>async (dispatch) =>{
    dispatch({type: ADD_ITEM_TO_CART_REQUEST})

    try{
        const {data}=await api.put('/api/cart/add', reqData);
        dispatch({type: ADD_ITEM_TO_CART_SUCCESS, payload: data});
        console.log("cart data", data);
    } catch(error){
        dispatch({type: ADD_ITEM_TO_CART_FAILURE, payload: error.message});
    }
}

export const removeCartItem = (cardItemId) =>async (dispatch) =>{
    dispatch({type: REMOVE_ITEM_FROM_CART_REQUEST});

    try{
        const {data}=api.delete(`/api/cart_item/remove/${cardItemId}`);
        dispatch({type: REMOVE_ITEM_FROM_CART_SUCCESS, payload: data});
    } catch(error){
        dispatch({type: REMOVE_ITEM_FROM_CART_FAILURE, payload: error.message});
    }
}

export const updateCartItem=(reqData)=> async (dispatch)=>{
    dispatch({type: UPDATE_CART_ITEM_REQUEST});

    try{
        const {data}=api.patch(`/api/cart_item/update/${reqData.cartItemId}`, {quantity: reqData.quantity});
        dispatch({type: UPDATE_CART_ITEM_SUCCESS, payload: data});
    } catch(error){
        dispatch({type: UPDATE_CART_ITEM_FAILURE, payload: error.message});
    }
}