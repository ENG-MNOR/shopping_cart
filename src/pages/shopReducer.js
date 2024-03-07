export const initialState = {
  products: [],
  total: 0,
};

const shopReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_TO_CART":
      return {
        ...state,
        products: payload.products,
      };
    case "REMOVE_From_CART":
      return {
        ...state,
        products: payload.products,
      };
    case "CALCULATE-TOTAL-PRICE":
      return {
        ...state,
        total: payload,
      };
    case "CLEAR-CARTS":
      return initialState;
    default:
      throw new Error("unknown action type");
  }
};

export default shopReducer;
