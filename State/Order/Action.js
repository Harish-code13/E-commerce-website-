import api from "../../Utils/api";
import { CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, CREATE_ORDER_FAILURE, GET_ORDERS_BY_ID_REQUEST, GET_ORDERS_BY_ID_SUCCESS, GET_ORDERS_BY_ID_FAILURE } from "./ActionType";



export const createOrder =(reqData)=> async (dispatch)=>{
    dispatch({type: CREATE_ORDER_REQUEST});

    try{
        const {data}=await api.post('/api/orders/create', reqData.data);
        if(data.id){
            reqData.navigate({search: `step=3&orderId=${data.id}`});
        }
        dispatch({type: CREATE_ORDER_SUCCESS, payload: data});
    } catch(error){
        dispatch({type: CREATE_ORDER_FAILURE, payload: error.message});
    }
};

export const getOrdersById =(reqData)=> async (dispatch)=>{
    dispatch({type: GET_ORDERS_BY_ID_REQUEST});
    const {userId}=reqData;

    try{
        const {data}=await api.get(`/api/orders/user/${userId}`);
        dispatch({type: GET_ORDERS_BY_ID_SUCCESS, payload: data});
    } catch(error){
        dispatch({type: GET_ORDERS_BY_ID_FAILURE, payload: error.message});
    }
};