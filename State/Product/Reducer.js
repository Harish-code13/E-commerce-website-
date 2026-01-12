import { FIND_PRODUCTS_REQUEST, FIND_PRODUCTS_SUCCESS, FIND_PRODUCTS_FAILURE } from "./ActionType";

const initialState = {
  products: [],
  loading: false,
  error: null,
};

export const customerProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case FIND_PRODUCTS_REQUEST:
      return { ...state, loading: true, error: null };
    case FIND_PRODUCTS_SUCCESS:
      return { ...state, loading: false, error: null, products: action.payload };
    case FIND_PRODUCTS_FAILURE:
      return { ...state, loading: false, error: action.payload};
    default:
      return state;
  }
}