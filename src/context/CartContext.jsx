import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../Reducer/CartReducer";
const CartContext = createContext();

const initialState = {
  cart: [],

  total_item: "",
  total_amount: "",
  shipping_fee: 50000,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const AddToCart = (id, amount, product) => {
    dispatch({ type: "ADD_TO_CART", payload: { id, amount, product } });
  };

  // increament and decreament

  const setDecrease = (id) => {
    dispatch({ type: "SET_DEC", payload: id });
  };

  const setIncrease = (id) => {
    dispatch({ type: "SET_INC", payload: id });
  };

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  // to clear the cart

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  // to add the data in local storage

  // end local Storage code

  useEffect(() => {
    dispatch({ type: "CART_TOTAL_ITEM" });
    dispatch({ type: "CART_TOTAL_PRICE" });
  });

  return (
    <CartContext.Provider
      value={{
        ...state,
        AddToCart,
        removeItem,
        clearCart,
        setDecrease,
        setIncrease,
      }}>
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };
