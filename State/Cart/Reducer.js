import { ADD_ITEM_TO_CART_REQUEST, REMOVE_ITEM_FROM_CART_SUCCESS } from "./ActionType"
import { ADD_ITEM_TO_CART_SUCCESS } from "./ActionType"
import { ADD_ITEM_TO_CART_FAILURE } from "./ActionType"
import { REMOVE_ITEM_FROM_CART_REQUEST } from "./ActionType"
import { REMOVE_ITEM_FROM_CART_FAILURE } from "./ActionType"
import { UPDATE_CART_ITEM_REQUEST } from "./ActionType"
import { UPDATE_CART_ITEM_SUCCESS } from "./ActionType"
import { UPDATE_CART_ITEM_FAILURE } from "./ActionType"
import { FIND_PRODUCTS_REQUEST } from "../Product/ActionType"
import { FIND_PRODUCTS_SUCCESS } from "../Product/ActionType"
import { FIND_PRODUCTS_FAILURE } from "../Product/ActionType"

const initialState = {
    cart:null,
    loading:false,
    error:null,
    cartItems: []
}


export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case ADD_ITEM_TO_CART_REQUEST:
        return { ...state, loading: true, error: null };
    case ADD_ITEM_TO_CART_SUCCESS:
        return { ...state, loading: false, error: null, cartItems: action.payload };
    case ADD_ITEM_TO_CART_FAILURE:
        return { ...state, loading: false, error: action.payload};
        case REMOVE_ITEM_FROM_CART_SUCCESS:
            return {
                ...state,
                cartItems: state.cartItems.filter(item => item.id !== action.payload.id)
            };
        case REMOVE_ITEM_FROM_CART_REQUEST:
            return { ...state, loading: true, error: null };
        case REMOVE_ITEM_FROM_CART_FAILURE:
            return { ...state, loading: false, error: action.payload};  
        case UPDATE_CART_ITEM_REQUEST:
            return { ...state, loading: true, error: null };
        case UPDATE_CART_ITEM_SUCCESS:
            return { ...state, loading: false, error: null, cartItems: action.payload };
        case UPDATE_CART_ITEM_FAILURE:
            return { ...state, loading: false, error: action.payload};
            case FIND_PRODUCTS_REQUEST:
                return { ...state, loading: true, error: null };
            case FIND_PRODUCTS_SUCCESS:
                return { ...state, loading: false, error: null, cartItems: action.payload };
            case FIND_PRODUCTS_FAILURE:
                return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
}   
