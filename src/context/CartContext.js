import React, {
  createContext,
  useCallback,
  useEffect,
  useReducer,
} from "react";

const initialState = {
  cartItems: JSON.parse(localStorage.getItem("cartItems")) || [],
  showCart: false,
  stickyNav: false,
};
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      };
    case "INCREASE_QUANTITY":
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };
    case "DECREASE_QUANTITY":
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === action.payload && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
      };
    case "GET_CART_ITEMS":
      return {
        ...state,
        cartItems: action.payload,
      };
    case "TOGGLE_CART":
      return {
        ...state,
        showCart: !state.showCart,
      };
    default:
      return state;
  }
};

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (item) => {
    const existingItem = state.cartItems.find(
      (cartItem) => cartItem.id === item.id
    );
    if (existingItem) {
      dispatch({ type: "INCREASE_QUANTITY", payload: item.id });
    } else {
      dispatch({ type: "ADD_TO_CART", payload: item });
    }
  };

  const removeFromCart = (itemId) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: itemId });
  };

  const increaseQuantity = (itemId) => {
    dispatch({ type: "INCREASE_QUANTITY", payload: itemId });
  };

  const decreaseQuantity = (itemId) => {
    const existingItem = state.cartItems.find(
      (cartItem) => cartItem.id === itemId
    );
    if (existingItem) {
      if (existingItem.quantity > 1) {
        dispatch({ type: "DECREASE_QUANTITY", payload: itemId });
      } else {
        dispatch({ type: "REMOVE_FROM_CART", payload: itemId });
      }
    }
  };

  const toggleCart = useCallback(() => {
    console.log("why do you run");
    dispatch({ type: "TOGGLE_CART" });
  }, []);

  useEffect(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      dispatch({
        type: "GET_CART_ITEMS",
        payload: JSON.parse(storedCartItems),
      });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
  }, [state.cartItems]);

  const cartContextValue = {
    cartItems: state.cartItems,
    showCart: state.showCart,
    toggleCart,
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  };

  return (
    <CartContext.Provider value={cartContextValue}>
      {children}
    </CartContext.Provider>
  );
};
