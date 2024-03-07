import { createContext, useContext } from "react";
import shopReducer, { initialState } from "./shopReducer";
import { useReducer } from "react";
import { children } from "react";

const ShopContext = createContext(initialState);

export const ShopProvider = ({ children }) => {
  const [state, dispatch] = useReducer(shopReducer, initialState);

  const addToCart = (product) => {
    const updatedProduct = state.products.concat(product);
    calculateTotal(updatedProduct);
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        products: updatedProduct,
      },
    });
  };
  const clearCart = () => {
    dispatch({
      type: "CLEAR-CARTS",
      payload: initialState,
    });
  };
  const calculateTotal = (products) => {
    let total = 0;
    products.forEach((pro) => {
      total += pro.price;
    });

    dispatch({
      type: "CALCULATE-TOTAL-PRICE",
      payload: total,
    });
  };

  const removeFromCart = (product) => {
    const updatedProduct = state.products.filter((p) => p.id !== product.id);
    calculateTotal(updatedProduct);
    dispatch({
      type: "REMOVE_From_CART",
      payload: {
        products: updatedProduct,
      },
    });
  };
  const values = {
    products: state.products,
    total: state.total,
    addToCart,
    removeFromCart,
    clearCart,
  };
  return <ShopContext.Provider value={values}>{children}</ShopContext.Provider>;
};

const useShop = () => {
  const context = useContext(ShopContext);
  if (context === undefined) {
    throw new Error("context most be used inside shopContext");
  }
  return context;
};
export default useShop;
