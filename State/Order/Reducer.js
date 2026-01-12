import {
    CREATE_ORDER_REQUEST,
    CREATE_ORDER_SUCCESS,
    
    CREATE_ORDER_FAILURE,
    GET_ORDERS_BY_ID_REQUEST,
    GET_ORDERS_BY_ID_SUCCESS,
    GET_ORDERS_BY_ID_FAILURE
} from "../Order/ActionType";


const initialState={
    orders:[],
    order:null,
    loading:false,
    error:null
}

export const orderReducer=(state=initialState, action)=>{
    switch(action.type){
        case CREATE_ORDER_REQUEST:
            return {...state, loading: true, error: null};
        case CREATE_ORDER_SUCCESS:
            return {...state, loading: false, order: action.payload};
        case CREATE_ORDER_FAILURE:
            return {...state, loading: false, error: action.payload};
        case GET_ORDERS_BY_ID_REQUEST:
            return {...state, loading: true, error: null};
        case GET_ORDERS_BY_ID_SUCCESS:
            return {...state, loading: false, orders: action.payload};
        case GET_ORDERS_BY_ID_FAILURE:
            return {...state, loading: false, error: action.payload};
        default:
            return state;
    }
};